import { HomeHero } from "./_components/home-hero"
import { HomeNavbar } from "./_components/home-navbar"
import { HomeTopbar } from "./_components/home-topbar"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HomeTopbar />
      <HomeNavbar />
      <HomeHero />
    </div>
  );
} 