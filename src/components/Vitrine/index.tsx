import { useCallback, useState, type FC } from 'react';
import './styles.scss';
import ProductPopup from '../ProductPopup';
import {
  useVitrineProducts,
  ProductSlider,
  type VitrineApiProduct,
} from '../vitrine-shared';

const TABS: { id: string; label: string }[] = [
  { id: 'celular', label: 'Celular' },
  { id: 'acessorios', label: 'Acessórios' },
  { id: 'tablets', label: 'Tablets' },
  { id: 'notebooks', label: 'Notebooks' },
  { id: 'tvs', label: 'TVs' },
  { id: 'ver-todos', label: 'Ver todos' },
];

const Vitrine: FC = () => {
  const { products, loadState } = useVitrineProducts();
  const [activeTab, setActiveTab] = useState('celular');
  const [selectedProduct, setSelectedProduct] =
    useState<VitrineApiProduct | null>(null);

  const closeModal = useCallback(() => setSelectedProduct(null), []);

  return (
    <section className="vitrine" aria-labelledby="vitrine-heading">
      <div className="container vitrine__inner">
        <div className="vitrine__intro">
          <div className="vitrine__heading">
            <span className="vitrine__rule" aria-hidden="true" />
            <h2 className="vitrine__title" id="vitrine-heading">
              Produtos relacionados
            </h2>
            <span className="vitrine__rule" aria-hidden="true" />
          </div>
          <a className="vitrine__link-all" href="#">
            Ver todos
          </a>
          <div className="vitrine__tabs" role="tablist" aria-label="Categorias">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`vitrine-tab-${tab.id}`}
                  aria-selected={isActive}
                  className={[
                    'vitrine__tab',
                    isActive ? 'vitrine__tab--active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <ProductSlider
          block="vitrine"
          products={products}
          loadState={loadState}
          onSelectProduct={setSelectedProduct}
        />
      </div>

      <ProductPopup
        isOpen={selectedProduct !== null}
        onClose={closeModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default Vitrine;
