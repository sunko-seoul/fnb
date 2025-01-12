import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 프랜차이즈 관리 플랫폼',
  description: 'AI 프랜차이즈 관리 플랫폼',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
