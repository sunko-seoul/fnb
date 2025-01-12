import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import KeyFeatures from './components/KeyFeatures'
import SuccessMetrics from './components/SuccessMetrics'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import PricingPlans from './components/PricingPlans'
import IntegrationPartners from './components/IntegrationPartners'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroBanner />
        <KeyFeatures />
        <SuccessMetrics />
        <HowItWorks />
        <Testimonials />
        <PricingPlans />
        <IntegrationPartners />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

