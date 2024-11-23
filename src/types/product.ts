export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  variants?: ProductVariant[];
  specifications?: Record<string, string>;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductVariant = {
  id: string;
  name: string;
  price: number;
  stock: number;
  attributes: Record<string, string>;
};

export type ProductQueryParams = {
  category?: string;
  search?: string;
  sort?: string;
  page?: number;
  limit?: number;
}; 