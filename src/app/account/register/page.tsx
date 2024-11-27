"use client"

import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Đăng ký</h1>
        <RegisterForm onSuccess={() => window.location.href = "/account"} />
      </div>
    </div>
  )
} 