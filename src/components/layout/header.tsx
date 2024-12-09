import { Navbar } from '@components/layout/navbar';
import { TopBar } from '@components/layout/topbar';
import { TopBarPromotion } from '@components/layout/topbar-promotion';

export function Header() {
  return (
    <>
      <TopBar />
      <TopBarPromotion />
      <Navbar />
    </>
  );
}
