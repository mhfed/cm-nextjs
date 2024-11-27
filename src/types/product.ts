export type Product = {
  id: string;
  name: string;
  price: number;
  rating?: number;
  reviewCount?: number;
  variants: ProductVariant[];
  isFreeShipping?: boolean;
  isPromotion?: boolean;
};

export type ProductVariant = {
  color: string;
  colorCode: string;
  images: string[];
  sizes: string[];
};

export type ProductQueryParams = {
  category?: string;
  search?: string;
  sort?: string;
  page?: number;
  limit?: number;
}; 