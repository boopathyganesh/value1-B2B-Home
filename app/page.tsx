import Banner from "@/components/Corporate/Banner"
import Fortune from "@/components/Corporate/Fortune"
import BenefitsSection from "@/components/Corporate/benefits"
import FlowChart from "@/components/Corporate/flowchart"
import Companies from "@/components/companies"
import Partners from "@/components/partners"
import Testimonials from "@/components/testimonials"

const Corporate = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center text-white">
      <Banner />
      <FlowChart />
      <BenefitsSection />
      <Fortune />
      <Companies />
      <Testimonials />
      <Partners />
    </main>
  )
}

export default Corporate
