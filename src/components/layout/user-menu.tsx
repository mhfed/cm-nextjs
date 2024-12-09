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
import { LoginForm } from '@components/auth/login-form';

export function UserMenu() {
  // Fake login state - replace with real auth later
  const isLoggedIn = true;
  const router = useRouter();

  if (!isLoggedIn) {
    return (
      <ResponsiveModal>
        <ResponsiveModalTrigger asChild>
          <button>
            <User className='w-6 h-6 text-white' />
          </button>
        </ResponsiveModalTrigger>
        <ResponsiveModalContent className=''>
          <div className='text-xl font-semibold mb-4'>Đăng nhập</div>
          <LoginForm onSuccess={() => router.back()} />
        </ResponsiveModalContent>
      </ResponsiveModal>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <User className='w-6 h-6 text-white' />
        </button>
      </SheetTrigger>
      <SheetContent side='right' className='w-[500px] p-0'>
        <div className='p-6'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='bg-gray-100 rounded-full p-4'>
              <User className='w-6 h-6' />
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
                  className='w-6 h-6'
                />
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            {/* Chi tiêu thêm section */}
            <div>
              <h3 className='text-base mb-2'>Chi tiêu thêm</h3>
              <div className='flex items-center gap-2'>
                <span className='text-blue-600 text-xl font-semibold'>
                  860.000đ
                </span>
                <span className='text-gray-500'>để lên hạng</span>
                <span className='text-yellow-600 font-medium'>VÀNG</span>
                <Image
                  src='/gold-medal.png'
                  alt='Gold Medal'
                  width={24}
                  height={24}
                  className='w-6 h-6'
                />
              </div>
              {/* Progress bar */}
              <div className='relative mt-2'>
                <div className='h-1 bg-gray-200 rounded-full'>
                  <div className='h-full w-1/3 bg-blue-600 rounded-full'></div>
                </div>
                <div className='flex justify-between mt-1'>
                  <Image
                    src='/bronze-medal.png'
                    alt='Bronze'
                    width={16}
                    height={16}
                    className='w-4 h-4'
                  />
                  <Image
                    src='/silver-medal.png'
                    alt='Silver'
                    width={16}
                    height={16}
                    className='w-4 h-4'
                  />
                  <Image
                    src='/gold-medal.png'
                    alt='Gold'
                    width={16}
                    height={16}
                    className='w-4 h-4'
                  />
                  <Image
                    src='/platinum-medal.png'
                    alt='Platinum'
                    width={16}
                    height={16}
                    className='w-4 h-4'
                  />
                </div>
              </div>
              <p className='text-sm text-gray-500 mt-2'>
                Hạng thành viên được vừa được xét lại vào ngày 01/10/2024,
                <br />
                ngày xét hạng tiếp theo: 01/01/2025
              </p>
            </div>

            {/* Coolcash section */}
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-base mb-1'>Bạn đang có</h3>
                <div className='flex items-center gap-2'>
                  <span className='text-xl font-semibold'>58.000 Coolcash</span>
                </div>
                <p className='text-sm text-gray-500'>Chờ: 0 Coolcash</p>
              </div>
              <Link
                href='/rewards'
                className='bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2'
              >
                CoolClub Rewards Hub
                <ChevronRight className='w-4 h-4' />
              </Link>
            </div>

            {/* Member benefits section */}
            <div>
              <h3 className='text-base mb-2'>Ưu đãi thành viên</h3>
              <div className='bg-blue-600 text-white px-4 py-2 rounded-lg inline-block'>
                Happy Friday
              </div>
              <p className='text-sm text-gray-500 mt-2'>
                Ngày vàng X2 Hoàn tiền Coolcash vào thứ 6 hàng tuần.
              </p>
            </div>
          </div>
        </div>

        <div className='border-t'>
          <Link
            href='/account'
            className='block w-full text-center py-4 text-blue-600 font-medium hover:bg-gray-50'
          >
            ĐI ĐẾN TÀI KHOẢN
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
