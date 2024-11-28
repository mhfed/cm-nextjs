import { ProductGallery } from "./_components/product-gallery"
import { ProductInfo } from "./_components/product-info"
import { RelatedProducts } from "./_components/related-products"
import { Container } from "@/components/ui/container"

export default async function ProductPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const product = await getProduct(params.id)

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      <RelatedProducts categoryId={product.categoryId} />
    </Container>
  )
} 