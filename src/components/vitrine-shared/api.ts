import localProductsJson from '../../data/products.json';
import type { VitrineApiProduct, VitrineApiResponse } from './types';

export const VITRINE_PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
export const PROXIED_ECONVERSE_URL = `${CORS_PROXY}${VITRINE_PRODUCTS_URL}`;
export const FETCH_TIMEOUT_MS = 12_000;

export const LOCAL_FALLBACK: VitrineApiResponse =
  localProductsJson as VitrineApiResponse;

export function extractProducts(data: unknown): VitrineApiProduct[] | null {
  if (!data || typeof data !== 'object') return null;
  const o = data as VitrineApiResponse;
  if (o.success !== true || !Array.isArray(o.products) || o.products.length === 0) {
    return null;
  }
  return o.products;
}

export function formatBRLPrice(reais: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(reais);
}
