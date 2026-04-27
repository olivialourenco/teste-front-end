import { useCallback, useState, type FC } from 'react';
import './styles.scss';
import ProductPopup from '../ProductPopup';
import {
  useVitrineProducts,
  ProductSlider,
  type VitrineApiProduct,
} from '../vitrine-shared';

const Vitrine3: FC = () => {
  const { products, loadState } = useVitrineProducts();
  const [selectedProduct, setSelectedProduct] =
    useState<VitrineApiProduct | null>(null);

  const closeModal = useCallback(() => setSelectedProduct(null), []);

  return (
    <section className="vitrine3" aria-labelledby="vitrine3-heading">
      <div className="container vitrine3__inner">
        <div className="vitrine3__intro">
          <div className="vitrine3__heading">
            <span className="vitrine3__rule" aria-hidden="true" />
            <h2 className="vitrine3__title" id="vitrine3-heading">
              Produtos relacionados
            </h2>
            <span className="vitrine3__rule" aria-hidden="true" />
          </div>
          <a className="vitrine3__link-all" href="#">
            Ver todos
          </a>
        </div>

        <ProductSlider
          block="vitrine3"
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

export default Vitrine3;
