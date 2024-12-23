'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ChevronRight, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalTrigger,
} from '@/components/extension/responsive-modal';
import { useRouter } from 'next/navigation';
import { LoginForm } from '@/components/auth/login-form';

export function UserMenu() {
  // Fake login state - replace with real auth later
  const isLoggedIn = true;
  const router = useRouter();

  if (!isLoggedIn) {
    return (
      <ResponsiveModal>
        <ResponsiveModalTrigger asChild>
          <button>
            <User className='h-6 w-6 text-white' />
          </button>
        </ResponsiveModalTrigger>
        <ResponsiveModalContent className=''>
          <div className='mb-4 text-xl font-semibold'>Đăng nhập</div>
          <LoginForm onSuccess={() => router.back()} />
        </ResponsiveModalContent>
      </ResponsiveModal>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <User className='h-6 w-6 text-white' />
        </button>
      </SheetTrigger>
      <SheetContent side='right' className='w-[500px] p-0'>
        <div className='p-6'>
          <div className='mb-6 flex items-center gap-4'>
            <div className='rounded-full bg-gray-100 p-4'>
              <User className='h-6 w-6' />
            </div>
            <div>
              <h2 className='text-2xl font-semibold'>Hi, Hiếu</h2>
              <div className='flex items-center gap-1'>
                <span className='text-gray-500'>BẠC</span>
                <Image
                  src='/medal-icon.png'
                  alt='Medal'
                  width={24}
                  height={24}
                  className='h-6 w-6'
                />
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            {/* Chi tiêu thêm section */}
            <div>
              <h3 className='mb-2 text-base'>Chi tiêu thêm</h3>
              <div className='flex items-center gap-2'>
                <span className='text-xl font-semibold text-blue-600'>
                  860.000đ
                </span>
                <span className='text-gray-500'>để lên hạng</span>
                <span className='font-medium text-yellow-600'>VÀNG</span>
                <Image
                  src='/gold-medal.png'
                  alt='Gold Medal'
                  width={24}
                  height={24}
                  className='h-6 w-6'
                />
              </div>
              {/* Progress bar */}
              <div className='relative mt-2'>
                <div className='h-1 rounded-full bg-gray-200'>
                  <div className='h-full w-1/3 rounded-full bg-blue-600'></div>
                </div>
                <div className='mt-1 flex justify-between'>
                  <Image
                    src='/bronze-medal.png'
                    alt='Bronze'
                    width={16}
                    height={16}
                    className='h-4 w-4'
                  />
                  <Image
                    src='/silver-medal.png'
                    alt='Silver'
                    width={16}
                    height={16}
                    className='h-4 w-4'
                  />
                  <Image
                    src='/gold-medal.png'
                    alt='Gold'
                    width={16}
                    height={16}
                    className='h-4 w-4'
                  />
                  <Image
                    src='/platinum-medal.png'
                    alt='Platinum'
                    width={16}
                    height={16}
                    className='h-4 w-4'
                  />
                </div>
              </div>
              <p className='mt-2 text-sm text-gray-500'>
                Hạng thành viên được vừa được xét lại vào ngày 01/10/2024,
                <br />
                ngày xét hạng tiếp theo: 01/01/2025
              </p>
            </div>

            {/* Coolcash section */}
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='mb-1 text-base'>Bạn đang có</h3>
                <div className='flex items-center gap-2'>
                  <span className='text-xl font-semibold'>58.000 Coolcash</span>
                </div>
                <p className='text-sm text-gray-500'>Chờ: 0 Coolcash</p>
              </div>
              <Link
                href='/rewards'
                className='flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white'
              >
                CoolClub Rewards Hub
                <ChevronRight className='h-4 w-4' />
              </Link>
            </div>

            {/* Member benefits section */}
            <div>
              <h3 className='mb-2 text-base'>Ưu đãi thành viên</h3>
              <div className='inline-block rounded-lg bg-blue-600 px-4 py-2 text-white'>
                Happy Friday
              </div>
              <p className='mt-2 text-sm text-gray-500'>
                Ngày vàng X2 Hoàn tiền Coolcash vào thứ 6 hàng tuần.
              </p>
            </div>
          </div>
        </div>

        <div className='border-t'>
          <Link
            href='/account'
            className='block w-full py-4 text-center font-medium text-blue-600 hover:bg-gray-50'
          >
            ĐI ĐẾN TÀI KHOẢN
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
