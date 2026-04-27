import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from 'react';
import {
  extractProducts,
  LOCAL_FALLBACK,
  PROXIED_ECONVERSE_URL,
  FETCH_TIMEOUT_MS,
} from './api';
import type { VitrineApiProduct, VitrineLoadState } from './types';

type Ctx = {
  products: VitrineApiProduct[];
  loadState: VitrineLoadState;
};

const VitrineProductsContext = createContext<Ctx | null>(null);

/** * Gerencia o carregamento inicial dos produtos: prioriza a API via proxy 
 * e utiliza o fallback local como garantia de disponibilidade.
 */
export const VitrineProductsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<VitrineApiProduct[]>([]);
  const [loadState, setLoadState] = useState<VitrineLoadState>('loading');

  useEffect(() => {
    const ac = new AbortController();
    const slowTimer = setTimeout(() => {
      ac.abort();
    }, FETCH_TIMEOUT_MS);
    let cancelled = false;

    (async () => {
      setLoadState('loading');
      let list: VitrineApiProduct[] | null = null;
      try {
        const res = await fetch(PROXIED_ECONVERSE_URL, { signal: ac.signal });
        if (res.ok) {
          const data: unknown = await res.json();
          list = extractProducts(data);
        }
      } catch {
        // Rede, CORS, proxy ou timeout no passo seguinte é feito o fallback
      } finally {
        clearTimeout(slowTimer);
      }

      if (cancelled) return;
      // Caso a requisição falhe ou retorne vazia, carrega os dados de segurança (fallback)
      if (list == null) {
        list = extractProducts(LOCAL_FALLBACK);
      }

      if (cancelled) return;
      // Se os dados forem válidos, atualiza o estado e finaliza o carregamento
      if (list && list.length > 0) {
        setProducts(list);
        setLoadState('idle');
        return;
      }
      setLoadState('error');
    })();
    // Limpeza de efeitos e cancelamento de requisições pendentes ao desmontar o componente
    return () => {
      cancelled = true;
      clearTimeout(slowTimer);
      ac.abort();
    };
  }, []);

  return (
    <VitrineProductsContext.Provider value={{ products, loadState }}>
      {children}
    </VitrineProductsContext.Provider>
  );
};
// Hook personalizado para acessar os dados dos produtos de forma simplificada
export function useVitrineProducts(): Ctx {
  const v = useContext(VitrineProductsContext);
  if (!v) {
    throw new Error('useVitrineProducts must be used within VitrineProductsProvider');
  }
  return v;
}
