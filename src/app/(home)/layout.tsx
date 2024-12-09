import { TopBar, TopBarPromotion, Footer, Navbar } from '@components/layout';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <TopBarPromotion />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
