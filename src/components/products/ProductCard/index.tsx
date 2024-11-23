import Image from 'next/image';
import type { Product } from '@/types/product';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-lg">
        <Image
          src={product.images[0]}
          alt={product.name}
          className="object-cover transition-transform group-hover:scale-105"
          fill
        />
      </div>
      {/* Product info */}
    </div>
  );
} 