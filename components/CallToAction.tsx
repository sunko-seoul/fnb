import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">프랜차이즈 비즈니스를 한 단계 업그레이드하세요</h2>
        <p className="text-xl mb-8">AI의 힘으로 효율성을 높이고 성장을 가속화하세요</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">데모 요청하기</Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">영업팀 문의</Button>
        </div>
      </div>
    </section>
  )
}

