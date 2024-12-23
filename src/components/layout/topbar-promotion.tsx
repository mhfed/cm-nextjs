import Link from 'next/link';
import { Container } from '@/components/ui/container';

export function TopBarPromotion() {
  return (
    <div className='bg-gray-700 text-white'>
      <Container size='full' className='py-1'>
        <div className='flex items-center justify-center text-sm'>
          Black Friday: Mua 1 Tặng 1
          <Link href='/' className='ml-2'>
            Xem chi tiết
          </Link>
        </div>
      </Container>
    </div>
  );
}
