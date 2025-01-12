import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: '스타터',
    price: '₩99,000',
    features: ['AI 챗봇', '기본 데이터 분석', '지식 허브 접근', '이메일 지원'],
  },
  {
    name: '프로',
    price: '₩299,000',
    features: ['고급 AI 챗봇', '심층 데이터 분석', '맞춤형 보고서', '우선 지원'],
  },
  {
    name: '엔터프라이즈',
    price: '맞춤 견적',
    features: ['완전 맞춤형 솔루션', '전용 계정 관리자', '온사이트 교육', '24/7 지원'],
  },
]

export default function PricingPlans() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">요금제</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/월</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">{index === 2 ? '문의하기' : '시작하기'}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

