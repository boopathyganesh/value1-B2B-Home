import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface CardProps {
    title: string;
    image: string | StaticImageData;
    description: string;
}

const BenefitCard = ({ title, image, description }: CardProps) => {
    return (
        <div className="flex flex-col items-center justify-start p-4 text-black rounded-lg w-[350px] h-96 gap-2 hover:scale-105 smooth group">
            <div className="w-64 h-2/3 flex items-center justify-center overflow-hidden bg-whi">
                <Image src={image} alt={title} width={500} height={500} className='w-full' />
            </div>
            <div className='h-1/3'>
                <h1 className='text-gold-500 text-2xl text-center'>{title}</h1>
                <p className='text-center line-clamp-3'>{description}</p>
            </div>
        </div>
    )
}

export default BenefitCard
