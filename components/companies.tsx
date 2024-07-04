import { brand } from '@/context/data';
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const Companies = () => {
    return (
        <section className='max-w-8xl w-full mx-auto' >
            <div className='mb-20'>
                <h1 className='text-center text-4xl text-gold-400 font-semibold mb-2'>Join Thousands of Indian Companies on Value1</h1>
                <p className='text-center text-2xl text-white/70'>Supported by India's Leading Brands and Employers</p>
            </div>
            <div className='flex items-center justify-center'>
                <Marquee speed={30} loop={0} autoFill gradient gradientColor='#000000' gradientWidth={200} className='bg-white h-24'>
                    {brand.map((item, index) => (
                        <div key={index} className='flex items-center justify-center w-32 h-auto ml-10 overflow-hidden'>
                            <Image src={item.imageUrl} alt={item.title} height={500} width={500} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default Companies