export interface CreateProductDto {
  name: string;
  code: string;
  image?: string;
  price: number;
  category: string;
  minimum_quantity: number;
  discount_rate: number;
}
