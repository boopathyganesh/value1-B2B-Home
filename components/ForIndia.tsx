import Image from 'next/image'
import React from 'react'
import Map from '@/public/images/svgs/India.svg'

const ForIndia = () => {
    return (
        <section className='max-w-8xl w-full mx-auto mb-10'>
            <div className='mb-5'>
                <h1 className='text-center text-4xl text-gold-400 font-semibold mb-2'>Empower Your Employees Across India</h1>
                <p className='text-center text-2xl text-white/70'>One Platform. One Agreement. One Community</p>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <div className='w-full flex items-center justify-center'>
                    <Image src={"/images/svgs/India.svg"} alt={'Indian Subcontinent'} width={800} height={800} />
                </div>
                {/* <div>Content</div> */}
            </div>
        </section>
    )
}

export default ForIndia
