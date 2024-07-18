import Image from 'next/image'
import React from 'react'
import Wave from "@/public/illustrations/wave.svg"
import Stroke from "@/public/illustrations/brush-stroke2.svg"

const Hero = () => {
    return (
        <section className='flex items-center justify-center bg-gold-100 w-full overflow-hidden relative text-black'>
            <div className='flex items-center justify-between max-w-7xl h-[700px]'>
                <div className='w-[800px] flex flex-col items-start justify-center'>
                    <h1 className='text-4xl font-medium'>Elevate Employee Rewards with <span className='relative'>Gold! <span className='absolute w-32 -bottom-1 left-0'><Image src={Stroke} alt={'stroke'}/></span></span></h1>
                    <h1 className='text-4xl font-medium'>Recognize Excellence with Precious, Unique <span className='relative'>Gold Rewards!<span className='absolute -bottom-6 left-0 '><Image src={Stroke} alt={'stroke'} className='w-72 '/></span></span></h1>
                    <p className='mt-5 text-xl font-medium'>Value1 is a field force management software suite that digitizes your field sales & service operations.</p>
                    <div className='flex items-center justify-center gap-6 my-10'>
                        <button className='px-5 py-3 border-2 border-gold-200 bg-gold-200 font-semibold text-black rounded-xl hover:scale-105 smooth'>Get Free Trial</button>
                        <button className='px-5 py-3 border-2 border-gold-200 font-semibold rounded-xl hover:bg-gold-200 text-black smooth'>Login</button>
                    </div>
                </div>
                <div className='w-1/2 h-full flex items-center justify-center'>
                    <Image src={'/illustrations/test.svg'} alt={''} width={800} height={800} className='w-full'/>
                </div>
            </div>
            <Image src={Wave} alt={''} width={1000} height={100} className='w-full absolute -bottom-2 object-center bg-gold-100' style={{ zIndex: 999 }} />
        </section>
    )
}

export default Hero
