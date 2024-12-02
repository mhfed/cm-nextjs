import Link from "next/link"
import Image from "next/image"

export function UserMenu() {
  return (
    <div className="flex items-center gap-4">
        
        <Link href="/account/login">
        <Image
            src="/images/user-icon.png"
            alt="Account"
            width={24}
            height={24}
        />
        </Link>
        <Link href="/cart" className="relative">
        <Image
            src="/images/cart-icon.png"
            alt="Cart"
            width={24}
            height={24}
        />
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
        </span>
        </Link>
    </div>
  )
}