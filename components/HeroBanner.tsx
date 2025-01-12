import { Button } from '@/components/ui/button'

export default function HeroBanner() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">AI 기반 프랜차이즈 관리 솔루션</h1>
        <p className="text-xl md:text-2xl mb-8"> 자동화를 통해 운영 효율을 극대화하세요</p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 mb-8">무료 데모 신청</Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">AI 챗봇 데모</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/By5L1JTAAG0"
              title="프랜차이즈AI 플랫폼 소개"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">대시보드 데모</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/a9bDa5qp8Ck"
              title="프랜차이즈AI 사용 방법"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

