import { Container } from '@/components/ui/container';
import { MainNav } from '@components/layout/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';
import { SearchBar } from './search-bar';
import { UserMenu } from './user-menu';
import { CartMini } from '@components/layout/cart-mini';
import { MobileNav } from '@components/layout/mobile-nav';

export function Navbar() {
  return (
    <nav className='bg-black shadow-sm'>
      <Container size='full'>
        <div className='flex items-center justify-between'>
          <div className='lg:hidden'>
            <MobileNav />
          </div>
          <Link href='/' className='flex-shrink-0'>
            <Image
              src='https://www.coolmate.me/images/logo-coolmate-new.svg'
              alt='Coolmate'
              width={70}
              height={50}
              priority
            />
          </Link>

          <MainNav />

          <div className='flex items-center gap-4'>
            <SearchBar />
            <div className='flex items-center gap-4'>
              <UserMenu />
              <CartMini />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
