export type {
  VitrineApiProduct,
  VitrineApiResponse,
  VitrineBlock,
  VitrineLoadState,
} from './types';
export {
  formatBRLPrice,
  extractProducts,
  PROXIED_ECONVERSE_URL,
  VITRINE_PRODUCTS_URL,
} from './api';
export { VitrineProductsProvider, useVitrineProducts } from './ProductsContext';
export { default as ProductCard } from './ProductCard';
export { default as ProductSlider } from './ProductSlider';
