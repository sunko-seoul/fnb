import { MessageSquare, BarChart2, BookOpen, Users } from 'lucide-react'

const features = [
  { icon: MessageSquare, title: 'AI 챗봇', description: '가맹점 관리 챗봇 제공' },
  { icon: BarChart2, title: '데이터 분석', description: '가맹점 성과 지표 추적' },
  { icon: BookOpen, title: 'HR 관리', description: '직원 관리를 한 눈에' },
  { icon: Users, title: '메뉴얼 관리', description: '메뉴얼 업로드 시 챗봇 학습' },
]

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

