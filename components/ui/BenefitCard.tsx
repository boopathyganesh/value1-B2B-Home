import Image,{ StaticImageData } from 'next/image';
import React from 'react'

interface CardProps{
    title: string;
    image:string|StaticImageData;
    description:string;
}

const BenefitCard = ({title,image,description}:CardProps) => {
    return (
        <div className="flex flex-col items-center justify-start p-4 border border-gold-500 bg-white rounded-3xl w-80 h-80 gap-2 hover:scale-105 smooth group">
            <span className="w-20 h-20 flex items-center justify-center">
                <Image src={image} alt={title} width={500} height={500} />
            </span>
            <h1 className='text-gold-300 text-2xl text-center'>{title}</h1>
            <p className='text-center text-black'>{description}</p>
        </div>
    )
}

export default BenefitCard
