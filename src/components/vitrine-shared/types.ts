/**
 * O campo `price` no JSON é o valor inteiro em reais (ex.: 15_000 → R$ 15.000,00).
 */
export type VitrineApiProduct = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

export type VitrineApiResponse = {
  success: boolean;
  products: VitrineApiProduct[];
};

export type VitrineBlock = 'vitrine' | 'vitrine2' | 'vitrine3';

export type VitrineLoadState = 'idle' | 'loading' | 'error';
