'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const metrics = [
  { label: '사용 중인 프랜차이즈', value: 5000, suffix: '+' },
  { label: '고객 만족도', value: 98, suffix: '%' },
  { label: '인건비 절감', value: 40, suffix: '%' },
  { label: '효율성 향상', value: 35, suffix: '%' },
]

export default function SuccessMetrics() {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setInView(true)
  }, [])

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">주요 지표</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">
                  {metric.value}
                  {metric.suffix}
                </div>
                <div className="text-lg">{metric.label}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

