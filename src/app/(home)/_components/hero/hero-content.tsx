import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold">
        Discover Your Perfect Style
      </h1>
      <p className="text-xl text-gray-600">
        Shop the latest trends in men's fashion with quality and comfort
      </p>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <Link href="/products">Shop Now</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/collections">View Collections</Link>
        </Button>
      </div>
    </div>
  )
} 