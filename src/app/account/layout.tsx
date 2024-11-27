export default function AccountLayout({
  children,
  login,
  register,
}: {
  children: React.ReactNode
  login: React.ReactNode
  register: React.ReactNode
}) {
  return (
    <>
      {children}
      {login}
      {register}
    </>
  )
} 