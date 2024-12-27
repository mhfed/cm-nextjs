'use client'

import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'

export function TestButton() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const collectionAlias = searchParams.get('collectionAlias')

  const handleClick = (alias: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('collectionAlias', alias)
    router.replace(`/?${params.toString()}`, {
      scroll: false,
    })
  }
  return (
    <div className='flex justify-start gap-4'>
      <Button
        variant={collectionAlias === 'san-pham-moi' ? 'default' : 'outline'}
        onClick={() => handleClick('san-pham-moi')}
      >
        Sản phẩm mới
      </Button>
      <Button
        variant={collectionAlias === 'ban-chay-nhat' ? 'default' : 'outline'}
        onClick={() => handleClick('ban-chay-nhat')}
      >
        Bán chạy nhất
      </Button>
    </div>
  )
}
