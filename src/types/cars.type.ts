export interface ICARSPRODUCT {
  code: string;
  name: string;
  price: number;
  media_url: string;
  stock: number;
}

export interface ICARS {
  quantity: number;
  product: ICARSPRODUCT;
}
