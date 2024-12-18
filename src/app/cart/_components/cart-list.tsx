import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

export function CartList() {
  return (
    <Card className='p-6 mb-6'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold'>Giỏ hàng</h2>
        <Button variant='ghost'>Xóa tất cả</Button>
      </div>

      {/* Cart items */}
      <div className='space-y-4'>
        {/* Repeat this for each item */}
        <div className='flex gap-4 border-b pb-4'>
          <img
            src='/product-image.jpg'
            alt='Product'
            className='w-24 h-24 object-cover rounded'
          />
          <div className='flex-1'>
            <h3 className='font-medium'>Tên sản phẩm</h3>
            <div className='flex gap-2 mt-2'>
              <Select defaultValue='size'>{/* Add size options */}</Select>
              <Input type='number' className='w-20' defaultValue='1' />
            </div>
            <div className='mt-2 flex justify-between'>
              <span className='text-red-600'>382.000đ</span>
              <Button variant='ghost' size='sm'>
                Xóa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
