import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';

export function UserMenu() {
  return (
    <div className='flex items-center gap-4'>
      <Link href='/account/login'>
        <User className='w-6 h-6 text-white' />
      </Link>
      <Link href='/cart' className='relative'>
        <ShoppingCart className='w-6 h-6 text-white' />
        <span className='absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
          0
        </span>
      </Link>
    </div>
  );
}
