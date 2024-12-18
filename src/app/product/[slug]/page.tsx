import { Container } from '@/components/ui/container';
import ProductGallery from './_components/product-gallery';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params);
  // const product = await getProduct(params.id)

  return (
    <Container>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-10'>
        <ProductGallery />
        {/* <ProductInfo product={product} /> */}
      </div>
      {/* <RelatedProducts categoryId={product.categoryId} /> */}
    </Container>
  );
}
