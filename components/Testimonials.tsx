'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "프랜차이즈AI 덕분에 우리 매장의 효율성이 크게 향상되었습니다. 고객 서비스 품질도 높아졌죠.",
    author: "김지영",
    company: "커피천국",
    logo: "/placeholder.svg?height=50&width=100&text=커피천국"
  },
  {
    quote: "데이터 기반 의사결정이 가능해져 매출이 30% 이상 증가했습니다. 정말 놀라운 제품입니다.",
    author: "이상호",
    company: "버거마스터",
    logo: "/placeholder.svg?height=50&width=100&text=버거마스터"
  },
  {
    quote: "AI 챗봇이 고객 문의 응대 시간을 크게 줄여주어 직원들의 업무 부담이 줄었습니다.",
    author: "박미란",
    company: "뷰티살롱",
    logo: "/placeholder.svg?height=50&width=100&text=뷰티살롱"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">고객 후기</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <blockquote className="text-xl italic mb-4">"{testimonials[currentIndex].quote}"</blockquote>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].company}</p>
              </div>
              <Image
                src={testimonials[currentIndex].logo}
                alt={testimonials[currentIndex].company}
                width={100}
                height={50}
              />
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

