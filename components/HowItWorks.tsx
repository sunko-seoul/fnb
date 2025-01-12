import Image from 'next/image'

const steps = [
  { title: '연결', description: '플랫폼에 프랜차이즈 정보 연동' },
  { title: '최적화', description: 'AI가 데이터 분석 및 개선점 제안' },
  { title: '성장', description: '효율성 증대 및 매출 향상 실현' },
]

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">이용 방법</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <Image
                  src={`/placeholder.svg?height=100&width=100&text=${index + 1}`}
                  alt={`Step ${index + 1}`}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

