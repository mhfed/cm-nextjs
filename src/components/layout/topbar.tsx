import Link from 'next/link';
import { Container } from '@/components/ui/container';

export function TopBar() {
  return (
    <div className='border-b bg-white'>
      <Container size='full' className='py-2'>
        <div className='flex items-center justify-center text-sm lg:justify-between'>
          <div className='flex gap-4'>
            <Link href='/'>COOL CLUB</Link>
            <Link href='/'>BARISING</Link>
            <Link href='/'>COOLXPRINT</Link>
          </div>
          <div className='flex hidden gap-4 lg:block'>
            <Link href='/account'>Thẻ thành viên</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>Về Coolmate</Link>
            <Link href='/support'>CSKH</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
