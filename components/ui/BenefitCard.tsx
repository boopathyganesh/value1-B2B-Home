import Image,{ StaticImageData } from 'next/image';
import React from 'react'

interface CardProps{
    title: string;
    image:string|StaticImageData;
    description:string;
}

const BenefitCard = ({title,image,description}:CardProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-gold-500/30 hover:bg-white/15 rounded-3xl w-[400px] h-96 gap-2 hover:scale-105 smooth">
            <span className="w-32">
                <Image src={image} alt={title} width={500} height={500} />
            </span>
            <h1 className='text-gold-300 text-2xl text-center'>{title}</h1>
            <p className='text-center text-white/50'>{description}</p>
        </div>
    )
}

export default BenefitCard
