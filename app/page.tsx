import Banner from "@/components/Corporate/Banner"
import ValueFortune from "@/components/Corporate/Fortune"
import BenefitsSection from "@/components/Corporate/benefits"
import FlowChart from "@/components/Corporate/flowchart"
import ForIndia from "@/components/ForIndia"
import Hero from "@/components/Hero"
import Companies from "@/components/companies"
import Partners from "@/components/partners"
import Testimonials from "@/components/testimonials"

const Corporate = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center text-white">
      <Hero />
      <Companies />
      {/* <FlowChart /> */}
      <BenefitsSection />
      <ValueFortune />
      <ForIndia />
      <Testimonials />
      <Partners />
    </main>
  )
}

export default Corporate
