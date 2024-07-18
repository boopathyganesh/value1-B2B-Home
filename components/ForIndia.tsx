import Image from 'next/image'
import React from 'react'
import Stroke from "@/public/illustrations/brush-stroke2.svg"

const ForIndia = () => {
    return (
        <section className='max-w-full bg-gold-100 w-full py-10'>
            <div className='max-w-8xl w-full mx-auto text-black'>
                <div className='mb-5'>
                    <h1 className='text-center text-4xl text-black font-semibold mb-2'>Empower your Employees across <span className='relative'>India<span className='absolute -bottom-1 left-0'><Image src={Stroke} alt={'stroke'} className="w-56" /></span></span></h1>
                    <p className='text-center text-2xl text-black/70'>One Platform. One Agreement. One Community</p>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <div className='w-full flex items-center justify-center'>
                        <Image src={"/images/svgs/India.svg"} alt={'Indian Subcontinent'} width={800} height={800} />
                    </div>
                    {/* <div>Content</div> */}
                </div>
            </div>
        </section>

    )
}

export default ForIndia
