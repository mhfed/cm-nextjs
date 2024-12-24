import { Button } from '@/components/ui/button'

export function CartFooter() {
  return (
    <div className='fixed bottom-0 left-0 right-0 border-t bg-white p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div>
          <div className='text-sm text-gray-600'>Thành tiền</div>
          <div className='text-xl font-bold'>1.723.000đ</div>
          <div className='text-sm text-gray-600'>
            Được hoàn 52.000 CoolCash | Tiết kiệm 205.000đ
          </div>
        </div>
        <Button size='lg'>ĐẶT HÀNG</Button>
      </div>
    </div>
  )
}
