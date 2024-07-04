import React from 'react'

import Image from 'next/image';
import Arrow from './FlowChartElement';

const FlowChart = () => {
  return (
    <section className='max-w-7xl w-full my-20 flex items-center justify-center'>
      <div className='flex flex-wrap flex-col lg:flex-row items-center justify-center gap-5'>
        <Arrow image='/images/svgs/career.svg' title={'MSOPs'} description='Employee Ownership Plan Advantage!' />
        <Arrow image='/images/svgs/career.svg' title={'Brands'} description='Explore 500+ Top Brands!' />
        <Arrow image='/images/svgs/career.svg' title={'Gold Rewards'} description='Enjoy Gold Rewards and Special Prices!' />
        <Arrow image='/images/svgs/career.svg' title={'Savings'} description='Save Up to 40% with Gold Expenses!' />
        <Arrow image='/images/svgs/career.svg' title='Revolution' description='Join the Movement Today!' />
        <Arrow image='/images/svgs/career.svg' title='Savings' description='Employers Save with Zero Cost!' />
      </div>
    </section>
  )
}

export default FlowChart
