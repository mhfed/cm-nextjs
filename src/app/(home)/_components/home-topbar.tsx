import Link from "next/link"
import { Container } from "@/components/ui/container"

export function HomeTopbar() {
  return (
    <div className="bg-white border-b">
      <Container size="full" className="py-2">
        <div className="flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <Link href="/">COOL CLUB</Link>
            <Link href="/">BARISING</Link>
            <Link href="/">COOLXPRINT</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/account">Thẻ thành viên</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">Về Coolmate</Link>
            <Link href="/support">CSKH</Link>
          </div>
        </div>
      </Container>
    </div>
  )
} 