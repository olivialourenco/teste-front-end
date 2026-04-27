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

/**
 * Uma única carga de dados para toda a Home: proxy + API e, se falhar, o mock local
 * (o mesmo mecanismo da Vitrine 1).
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
        /* proxy, CORS, rede, timeout (Abort) → tenta mock */
      } finally {
        clearTimeout(slowTimer);
      }

      if (cancelled) return;

      if (list == null) {
        list = extractProducts(LOCAL_FALLBACK);
      }

      if (cancelled) return;

      if (list && list.length > 0) {
        setProducts(list);
        setLoadState('idle');
        return;
      }
      setLoadState('error');
    })();

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

export function useVitrineProducts(): Ctx {
  const v = useContext(VitrineProductsContext);
  if (!v) {
    throw new Error('useVitrineProducts must be used within VitrineProductsProvider');
  }
  return v;
}
