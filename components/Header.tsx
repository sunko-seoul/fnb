import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">프랜차이즈AI</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-blue-600">홈</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">기능</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">가격</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">리소스</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">문의</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="outline">로그인</Button>
          <Button>회원가입</Button>
        </div>
      </div>
    </header>
  )
}

