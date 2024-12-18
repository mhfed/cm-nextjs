import { Container } from '@components/ui/container';
import { CartSummary } from './_components/cart-summary';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CartList } from './_components/cart-list';
import { CartFooter } from './_components/cart-footer';

export default function CartPage() {
  return (
    <Container className='py-8 overflow-y-auto pb-32' size='full'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
          Giỏ hàng của bạn
        </h1>

        <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
          {/* Thông tin đặt hàng */}
          <div className='lg:col-span-7'>
            <Card className='p-6'>
              <h2 className='text-xl font-semibold mb-6'>Thông tin đặt hàng</h2>

              <div className='space-y-4'>
                <div className='flex gap-4'>
                  <div className='w-1/4'>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder='Anh/Chị' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='anh'>Anh</SelectItem>
                        <SelectItem value='chi'>Chị</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex-1'>
                    <Input placeholder='Họ và tên' />
                  </div>
                </div>

                <div>
                  <Label>Số điện thoại</Label>
                  <Input type='tel' placeholder='Số điện thoại' />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input type='email' placeholder='Email' />
                </div>

                <div>
                  <Label>Địa chỉ</Label>
                  <Input placeholder='Địa chỉ' />
                </div>

                <div className='grid grid-cols-3 gap-4'>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Tỉnh/Thành' />
                    </SelectTrigger>
                    <SelectContent>{/* Add provinces */}</SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Quận/Huyện' />
                    </SelectTrigger>
                    <SelectContent>{/* Add districts */}</SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Phường/Xã' />
                    </SelectTrigger>
                    <SelectContent>{/* Add wards */}</SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          {/* Giỏ hàng */}
          <div className='mt-16 lg:col-span-5 lg:mt-0'>
            <CartList />
            <CartSummary />
          </div>
        </div>

        {/* Cart Footer */}
        <CartFooter />
      </div>
    </Container>
  );
}
