import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">프랜차이즈AI</h3>
            <p className="text-sm text-gray-400">AI 기반 프랜차이즈 관리 솔루션</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">홈</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">기능</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">가격</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">문의</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">뉴스레터 구독</h4>
            <form className="flex space-x-2">
              <Input type="email" placeholder="이메일 주소" className="bg-gray-700 text-white" />
              <Button type="submit">구독</Button>
            </form>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">팔로우</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          &copy; 2023 프랜차이즈AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

