"use client"

import { LoginForm } from "@/components/auth/login-form"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="text-xl font-semibold mb-4">Đăng nhập</div>
        <LoginForm onSuccess={() => router.back()} />
      </DialogContent>
    </Dialog>
  )
} 