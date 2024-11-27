"use client"

import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Đăng nhập</h1>
        <LoginForm onSuccess={() => window.location.href = "/account"} />
      </div>
    </div>
  )
} 