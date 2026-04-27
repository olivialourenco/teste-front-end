import { type FC } from 'react';
import { formatBRLPrice } from './api';
import type { VitrineApiProduct, VitrineBlock } from './types';

type ProductCardProps = {
  product: VitrineApiProduct;
  block: VitrineBlock;
  onSelect: (p: VitrineApiProduct) => void;
};

const ProductCard: FC<ProductCardProps> = ({ product, block, onSelect }) => {
  return (
    <li className={`${block}__card`}>
      <article className={`${block}__card-article`}>
        <button
          type="button"
          className={`${block}__card-surface`}
          onClick={() => onSelect(product)}
        >
          <div className={`${block}__card-image-wrap`}>
            <img
              src={product.photo}
              alt=""
              className={`${block}__card-image`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 className={`${block}__card-title`}>{product.productName}</h3>
          <p
            className={`${block}__card-desc`}
            title={product.descriptionShort}
          >
            {product.descriptionShort}
          </p>
          <p className={`${block}__card-price`} aria-label="Preço atual">
            {formatBRLPrice(product.price)}
          </p>
          <span className={`${block}__buy`}>Comprar</span>
        </button>
      </article>
    </li>
  );
};

export default ProductCard;
