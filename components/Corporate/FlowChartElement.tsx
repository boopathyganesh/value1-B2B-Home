import React from 'react'

interface ElementProps {
    title:string;
    description:string;
}

const FlowChartElement = ({title,description}:ElementProps) => {
    return (
        <div className='p-3 w-44 h-52 flex flex-col items-center justify-start gap-2 bg-gray-100 text-black rounded-2xl border-2 border-gold-300'>
            <div className='h-1/2 flex items-center justify-center p-3'>
                <span className='text-center text-xl font-semibold text-gold-300'>{title}</span>
            </div>
            <div className='mt-3'>
                <p className='text-center text-base'>{description}</p>
            </div>
        </div>
    )
}

export default FlowChartElement
