'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LoginForm } from './login-form'
import { RegisterForm } from './register-form'
import { useRouter, useSearchParams } from 'next/navigation'

export function AuthModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultTab = searchParams.get('tab') || 'login'

  const handleClose = () => {
    onClose()
    router.push('/account') // Remove query params
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <Tabs defaultValue={defaultTab} className='w-full'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='login'>Đăng nhập</TabsTrigger>
            <TabsTrigger value='register'>Đăng ký</TabsTrigger>
          </TabsList>
          <TabsContent value='login'>
            <LoginForm onSuccess={handleClose} />
          </TabsContent>
          <TabsContent value='register'>
            <RegisterForm onSuccess={handleClose} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
