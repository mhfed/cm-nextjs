import { NextRequest, NextResponse } from 'next/server'
import { authService } from '@/services/server/auth'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    await authService.validateToken(token.value)
    return NextResponse.next()
  } catch (error: unknown) {
    console.log('🚀 ~ middleware ~ error:', error)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/account/:path*', '/checkout/:path*'],
}
