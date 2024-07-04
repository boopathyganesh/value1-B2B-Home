import Image from "next/image"
import { FaCheck } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/custom-tabs"


const Fortune = () => {
  return (
    <section className="max-w-full w-full flex items-center justify-center bg-white/15 my-10 md:my-16">
      <Tabs className="py-10" defaultValue={"one"}>
        <div className='max-w-sm md:max-w-8xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-5'>
          <div className='md:w-2/5 my-5 rounded-3xl overflow-hidden'>
            <Image src={'/images/Asset-013.jpg'} alt={''} width={800} height={800} className='w-full h-auto' />
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl font-bold text-center'>Why Upskill becomes the best training course & bootcamp.</h1>

            <TabsList className="flex flex-wrap items-center justify-center gap-5 max-w-4xl">
              <div className="flex items-center justify-start gap-3 w-80">
                <TabsTrigger value="one" className="rounded-full h-14 w-14">
                  <span>
                    <FaCheck className='text-3xl text-gold-500' />
                  </span>
                </TabsTrigger>
                <div className='flex flex-col items-start justify-center gap-2'>
                  <h1 className='text-xl font-semibold'>Gold Rewards Empowerment</h1>
                  <p>See Why Employees Love Us</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 w-80">
                <TabsTrigger value="two" className="rounded-full h-14 w-14">
                  <span>
                    <FaCheck className='text-3xl text-gold-500' />
                  </span>
                </TabsTrigger>
                <div className='flex flex-col items-start justify-center gap-2'>
                  <h1 className='text-xl font-semibold'>Completely Customizable</h1>
                  <p>Completely Customizable Solutions</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 w-80">
                <TabsTrigger value="three" className="rounded-full h-14 w-14">
                  <span>
                    <FaCheck className='text-3xl text-gold-500' />
                  </span>
                </TabsTrigger>
                <div className='flex flex-col items-start justify-center gap-2'>
                  <h1 className='text-xl font-semibold'>Comprehensive Benefits Marketplace</h1>
                  <p>Explore Our Benefits Marketplace</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 w-80">
                <TabsTrigger value="four" className="rounded-full h-14 w-14">
                  <span>
                    <FaCheck className='text-3xl text-gold-500' />
                  </span>
                </TabsTrigger>
                <div className='flex flex-col items-start justify-center gap-2'>
                  <h1 className='text-xl font-semibold'>Actionable Business Intelligence</h1>
                  <p>Unlock Actionable Insights</p>
                </div>
              </div>
            </TabsList>
          </div>
        </div>
        <div className="md:max-w-7xl mx-auto w-full">
          <TabsContent value="one">
            <div className='md:pt-0 relative max-w-sm md:max-w-6xl mx-auto w-full bg-white border-2 border-gold-300 flex flex-col md:flex-row items-center justify-center md:pr-20 gap-3 md:gap-10 h-56 rounded-3xl'>
              <div className='flex max-w-3xl md:flex-row items-center justify-center gap-3 md:gap-5'>
                <p className='text-xl font-medium text-black'>Empower your employees with gold rewards they love. Elevate morale and
                  engagement with our innovative reward system tailored to your workforce's
                  needs.</p>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-center' >
                <Image className='absolute bottom-0 right-0 w-48 md:w-64 pointer-events-none' src={'/images/Asset-28.png'} width={500} height={500} alt={''} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="two">
            <div className='md:pt-0 relative max-w-sm md:max-w-6xl mx-auto w-full bg-white border-2 border-gold-300 flex flex-col md:flex-row items-center justify-center md:pr-20 gap-3 md:gap-10 h-56 rounded-3xl'>
              <div className='flex max-w-3xl md:flex-row items-center justify-center gap-3 md:gap-5'>
                <p className='text-xl font-medium text-black'>Tailor your rewards program to match your brand identity and culture. From
                  design to content, personalize every aspect for a seamless employee
                  experience.</p>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-center' >
                <Image className='absolute bottom-0 right-0 w-48 md:w-64 pointer-events-none' src={'/images/Asset-28.png'} width={500} height={500} alt={''} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="three">
            <div className='md:pt-0 relative max-w-sm md:max-w-6xl mx-auto w-full bg-white border-2 border-gold-300 flex flex-col md:flex-row items-center justify-center md:pr-20 gap-3 md:gap-10 h-56 rounded-3xl'>
              <div className='flex max-w-3xl md:flex-row items-center justify-center gap-3 md:gap-5'>
                <p className='text-xl font-medium text-black'>Access a vast array of benefit-focused apps to cater to your employees' diverse
                  needs. Choose the solutions that align with your organization's goals and
                  objectives.</p>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-center' >
                <Image className='absolute bottom-0 right-0 w-48 md:w-64 pointer-events-none' src={'/images/Asset-28.png'} width={500} height={500} alt={''} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="four">
            <div className='md:pt-0 relative max-w-sm md:max-w-6xl mx-auto w-full bg-white border-2 border-gold-300 flex flex-col md:flex-row items-center justify-center md:pr-20 gap-3 md:gap-10 h-56 rounded-3xl'>
              <div className='flex max-w-3xl md:flex-row items-center justify-center gap-3 md:gap-5'>
                <p className='text-xl font-medium text-black'>Gain valuable insights into employee preferences and behaviors. Utilize
                  data-driven analytics to make informed decisions and optimize your rewards
                  strategy for maximum impact.</p>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-center' >
                <Image className='absolute bottom-0 right-0 w-48 md:w-64 pointer-events-none' src={'/images/Asset-28.png'} width={500} height={500} alt={''} />
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}

export default Fortune
