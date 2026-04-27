/** * Interface que representa a estrutura de um produto vindo da API 
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

// Identificadores para os blocos de vitrine da página
export type VitrineBlock = 'vitrine' | 'vitrine2' | 'vitrine3';

// Estados possíveis para o controle de carregamento dos dados
export type VitrineLoadState = 'idle' | 'loading' | 'error';
