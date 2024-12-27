'use client'

import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'

export function FilterButton() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const collectionSeoAlias = searchParams.get('featured')

  const handleClick = (alias: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('featured', alias)
    router.replace(`/?${params.toString()}`, {
      scroll: false,
    })
  }
  return (
    <div className='flex justify-start gap-4'>
      <Button
        size='lg'
        variant={collectionSeoAlias === 'san-pham-moi' ? 'default' : 'outline'}
        onClick={() => handleClick('san-pham-moi')}
      >
        Sản phẩm mới
      </Button>
      <Button
        size='lg'
        variant={collectionSeoAlias === 'ban-chay-nhat' ? 'default' : 'outline'}
        onClick={() => handleClick('ban-chay-nhat')}
      >
        Bán chạy nhất
      </Button>
    </div>
  )
}
