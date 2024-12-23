import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from '@/components/extension/carousel';

const ProductGallery = () => {
  return (
    <Carousel orientation='vertical' className='flex items-center gap-2'>
      <div className='relative basis-3/4'>
        <CarouselMainContainer className='h-60'>
          {Array.from({ length: 10 }).map((_, index) => (
            <SliderMainItem
              key={index}
              className='flex h-52 items-center justify-center rounded-md border border-muted'
            >
              Slide {index + 1}
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
      </div>
      <CarouselThumbsContainer className='h-60 basis-1/4'>
        {Array.from({ length: 10 }).map((_, index) => (
          <SliderThumbItem
            key={index}
            index={index}
            className='rounded-md bg-transparent'
          >
            <span className='flex h-full w-full cursor-pointer items-center justify-center rounded-md border border-muted bg-background'>
              Slide {index + 1}
            </span>
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export default ProductGallery;
