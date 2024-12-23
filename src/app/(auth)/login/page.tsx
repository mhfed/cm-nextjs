'use client';

import { LoginForm } from '@/components/auth/login-form';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className='sm:max-w-[425px]'>
        <div className='mb-4 text-xl font-semibold'>Đăng nhập 1</div>
        <LoginForm onSuccess={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
}
