import React from 'react'
import BenefitCard from '../ui/BenefitCard'
import Image from 'next/image'
import Stroke from "@/public/illustrations/brush-stroke2.svg"

const BenefitsSection = () => {
  return (
    <section className='flex items-center justify-center bg-gold-100 w-full py-14'>
      <div className='max-w-8xl mx-auto flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-10'>
            <h1 className='text-center text-4xl text-black font-semibold mb-2'>Unlock Exclusive Benefits and <span className=' relative'>Gold Rewards <span className='absolute -bottom-6 left-0 '><Image src={Stroke} alt={'stroke'} className='w-72'/></span></span> for Your Team</h1>
            <p className='text-center text-2xl font-medium text-black/60'>Tailor Programs to Fit Your Employee&apos;s Needs</p>
          </div>
          <div className='relative flex items-center justify-center flex-wrap gap-5 z-10'>
            <BenefitCard title={'Exclusive Rewards'} image={'/illustrations/reward.svg'} description={'Unlock special pricing and earn gold rewards across online shopping, travel, ticketing, financial services, health, value brands, and professional services. Your expenses transform into gold rewards and ownership shares.'} />
            <BenefitCard title={'Diverse Services'} image={'/illustrations/services.svg'} description={'Explore exclusive deals in online shopping for brands, seamless travel bookings, convenient ticketing, robust financial services, comprehensive health solutions, value brand offers, and expert professional consultations.'} />
            <BenefitCard title={'Transformative Rewards'} image={'/illustrations/transformation.svg'} description={'Recycle your expenses into valuable gold rewards and ownership shares. Empower your employees with financial growth opportunities and exclusive benefits tailored to their lifestyle needs and preferences'} />
            <Image src={'/illustrations/obj1.svg'} alt={''} className='absolute -top-10 -left-56 animate-wave' height={200} width={200} style={{zIndex:-1}} />
            <Image src={'/illustrations/obj2.svg'} alt={''} className='absolute -bottom-10 -right-56' height={200} width={200} style={{zIndex:-1}} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
