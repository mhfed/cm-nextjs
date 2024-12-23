import Link from 'next/link';
import { Container } from '@/components/ui/container';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='bg-black pb-6 pt-12 text-white'>
      <Container>
        <div className='mb-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5'>
          {/* Column 1 */}
          <div className='space-y-4'>
            <h4 className='font-medium uppercase'>COOLMATE</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <Link href='/'>Về Coolmate</Link>
              </li>
              <li>
                <Link href='/'>Cơ hội việc làm</Link>
              </li>
              <li>
                <Link href='/'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Chăm sóc khách hàng</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className='space-y-4'>
            <h4 className='font-medium uppercase'>CHÍNH SÁCH</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <Link href='/'>Chính sách đổi trả</Link>
              </li>
              <li>
                <Link href='/'>Chính sách bảo mật</Link>
              </li>
              <li>
                <Link href='/'>Chính sách vận chuyển</Link>
              </li>
              <li>
                <Link href='/'>Điều khoản dịch vụ</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className='space-y-4'>
            <h4 className='font-medium uppercase'>LIÊN HỆ VỚI COOLMATE</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                Hotline: <Link href='tel:1900272737'>1900.27.27.37</Link>
              </li>
              <li>
                Email:{' '}
                <Link href='mailto:Cool@coolmate.me'>Cool@coolmate.me</Link>
              </li>
              <li>Thứ 2 - CN: 8h30 - 17h30</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className='space-y-4'>
            <h4 className='font-medium uppercase'>KẾT NỐI VỚI CHÚNG TÔI</h4>
            <div className='flex gap-4'>
              <Link href='/' aria-label='Facebook'>
                <Image
                  src='/facebook.svg'
                  alt='Facebook'
                  width={24}
                  height={24}
                />
              </Link>
              <Link href='/' aria-label='Instagram'>
                <Image
                  src='/instagram.svg'
                  alt='Instagram'
                  width={24}
                  height={24}
                />
              </Link>
              <Link href='/' aria-label='Youtube'>
                <Image
                  src='/youtube.svg'
                  alt='Youtube'
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          {/* Column 5 */}
          <div className='space-y-4'>
            <h4 className='font-medium uppercase'>PHƯƠNG THỨC THANH TOÁN</h4>
            <div className='flex flex-wrap gap-2'>
              <Image
                src='/visa.svg'
                alt='Visa'
                width={40}
                height={24}
                className='object-contain'
              />
              <Image
                src='/mastercard.svg'
                alt='Mastercard'
                width={40}
                height={24}
                className='object-contain'
              />
              <Image
                src='/momo.svg'
                alt='Momo'
                width={40}
                height={24}
                className='object-contain'
              />
              <Image
                src='/zalopay.svg'
                alt='ZaloPay'
                width={40}
                height={24}
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
