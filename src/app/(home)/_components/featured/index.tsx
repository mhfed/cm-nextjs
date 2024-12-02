import { Container } from "@/components/ui/container"
import { ProductCarousel } from "./product-carousel"
import { dummyProducts } from "@/lib/constants"

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <Container size="full">
        <ProductCarousel products={dummyProducts} />
      </Container>
    </section>
  )
} 