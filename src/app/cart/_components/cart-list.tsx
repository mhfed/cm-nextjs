import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import Image from 'next/image'

export function CartList() {
  return (
    <Card className='mb-6 p-6'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-xl font-semibold'>Giỏ hàng</h2>
        <Button variant='ghost'>Xóa tất cả</Button>
      </div>

      {/* Cart items */}
      <div className='space-y-4'>
        {/* Repeat this for each item */}
        <div className='flex gap-4 border-b pb-4'>
          <Image
            src='/product-image.jpg'
            alt='Product'
            className='h-24 w-24 rounded object-cover'
            width={100}
            height={100}
          />
          <div className='flex-1'>
            <h3 className='font-medium'>Tên sản phẩm</h3>
            <div className='mt-2 flex gap-2'>
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
  )
}
