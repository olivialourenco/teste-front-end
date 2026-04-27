import { useCallback, useState, type FC } from 'react';
import './styles.scss';
import ProductPopup from '../ProductPopup';
import {
  useVitrineProducts,
  ProductSlider,
  type VitrineApiProduct,
} from '../vitrine-shared';

const Vitrine2: FC = () => {
  const { products, loadState } = useVitrineProducts();
  const [selectedProduct, setSelectedProduct] =
    useState<VitrineApiProduct | null>(null);

  const closeModal = useCallback(() => setSelectedProduct(null), []);

  return (
    <section className="vitrine2" aria-labelledby="vitrine2-heading">
      <div className="container vitrine2__inner">
        <div className="vitrine2__intro">
          <div className="vitrine2__heading">
            <span className="vitrine2__rule" aria-hidden="true" />
            <h2 className="vitrine2__title" id="vitrine2-heading">
              Produtos relacionados
            </h2>
            <span className="vitrine2__rule" aria-hidden="true" />
          </div>
          <a className="vitrine2__link-all" href="#">
            Ver todos
          </a>
        </div>

        <ProductSlider
          block="vitrine2"
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

export default Vitrine2;
