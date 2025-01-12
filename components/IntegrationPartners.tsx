import Image from 'next/image'

const partners = [
  { name: 'POS 시스템', logo: '/placeholder.svg?height=50&width=100&text=POS' },
  { name: 'CRM 솔루션', logo: '/placeholder.svg?height=50&width=100&text=CRM' },
  { name: '재고 관리', logo: '/placeholder.svg?height=50&width=100&text=재고' },
  { name: '회계 시스템', logo: '/placeholder.svg?height=50&width=100&text=회계' },
  { name: '인사 관리', logo: '/placeholder.svg?height=50&width=100&text=인사' },
]

export default function IntegrationPartners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">연동 파트너</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

