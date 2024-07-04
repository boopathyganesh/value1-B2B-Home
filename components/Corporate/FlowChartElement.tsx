import Image from 'next/image';
import React from 'react'

interface ElementProps {
    title:string;
    description:string;
    image:string;
}

const FlowChartElement = ({title,description,image}:ElementProps) => {
    return (
        <div className='p-3 w-44 h-52 flex flex-col items-center justify-start text-white'>
            <div className='w-24 h-auto flex items-center justify-center'>
                <Image src={image} alt={title} height={500} width={500} />
            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
                <span className='text-center text-xl font-semibold text-gold-300'>{title}</span>
                <p className='text-center text-base'>{description}</p>
            </div>
        </div>
    )
}

export default FlowChartElement
