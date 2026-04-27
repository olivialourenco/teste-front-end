import { type FC } from 'react';
import arrowPrev from '../../assets/vitrine/Group 2411.svg';
import arrowNext from '../../assets/vitrine/Group 2412.svg';
import ProductCard from './ProductCard';
import { useVitrineCarousel } from './useVitrineCarousel';
import type { VitrineApiProduct, VitrineBlock, VitrineLoadState } from './types';

type ProductSliderProps = {
  block: VitrineBlock;
  products: VitrineApiProduct[];
  loadState: VitrineLoadState;
  onSelectProduct: (p: VitrineApiProduct) => void;
};

const ProductSlider: FC<ProductSliderProps> = ({
  block,
  products,
  loadState,
  onSelectProduct,
}) => {
  const {
    rowWrapRef,
    slideIndex,
    maxSlide,
    showCarousel,
    goPrev,
    goNext,
    trackStyle,
    rowListStyle,
  } = useVitrineCarousel(products.length, loadState);

  return (
    <div className={`${block}__slider`}>
      <button
        type="button"
        className={`${block}__arrow ${block}__arrow--prev`}
        aria-label="Anterior"
        disabled={!showCarousel || slideIndex === 0}
        onClick={goPrev}
      >
        <img
          src={arrowPrev}
          alt=""
          width={32}
          height={32}
          className={`${block}__arrow-icon`}
        />
      </button>
      <div className={`${block}__row-wrap`} ref={rowWrapRef}>
        {loadState === 'loading' && (
          <p className={`${block}__status`}>Carregando produtos…</p>
        )}
        {loadState === 'error' && (
          <p className={`${block}__status`} role="alert">
            Não foi possível carregar os produtos. Tente de novo em instantes.
          </p>
        )}
        {loadState === 'idle' && products.length > 0 && (
          <div
            className={`${block}__row-track`}
            data-carousel={showCarousel ? 'on' : 'off'}
            style={trackStyle}
          >
            <ul
              className={`${block}__row`}
              data-carousel={showCarousel ? 'on' : 'off'}
              style={rowListStyle}
            >
              {products.map((product, index) => (
                <ProductCard
                  key={`${product.productName}-${index}`}
                  product={product}
                  block={block}
                  onSelect={onSelectProduct}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
      <button
        type="button"
        className={`${block}__arrow ${block}__arrow--next`}
        aria-label="Próximo"
        disabled={!showCarousel || slideIndex >= maxSlide}
        onClick={goNext}
      >
        <img
          src={arrowNext}
          alt=""
          width={32}
          height={32}
          className={`${block}__arrow-icon`}
        />
      </button>
    </div>
  );
};

export default ProductSlider;
