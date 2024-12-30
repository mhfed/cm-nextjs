export type AuthResponse = {
  accessToken: string
  refreshToken: string
}

export type LoginDto = {
  email: string
  password: string
}

export type RegisterDto = {
  email: string
  password: string
  name: string
}

export type ForgotPasswordDto = {
  email: string
}
