'use client';
import { Navbar } from '@components/layout/navbar';
import { TopBar } from '@components/layout/topbar';
import { TopBarPromotion } from '@components/layout/topbar-promotion';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { cn } from '@/lib/utils';

export function Header() {
  const isScrollingDown = useScrollDirection();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white transition-transform duration-300',
        isScrollingDown && '-translate-y-full'
      )}
    >
      <TopBar />
      <TopBarPromotion />
      <Navbar />
    </header>
  );
}
