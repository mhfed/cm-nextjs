'use client'

import { RegisterForm } from '@/components/auth/register-form'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className='sm:max-w-[425px]'>
        <div className='mb-4 text-xl font-semibold'>Đăng ký</div>
        <RegisterForm onSuccess={() => router.back()} />
      </DialogContent>
    </Dialog>
  )
}
