import React from 'react'

import Image from 'next/image';
import Arrow from './FlowChartElement';

const FlowChart = () => {
  return (
    <section className='max-w-7xl w-full my-20 flex items-center justify-center'>
      <div className='flex flex-wrap flex-col lg:flex-row items-center justify-center gap-5'>
        <Arrow title={'MSOPs'} description='Employee Ownership Plan Advantage!' />
        <Arrow title={'Brands'} description='Explore 500+ Top Brands!' />
        <Arrow title={'Gold Rewards'} description='Enjoy Gold Rewards and Special Prices!' />
        <Arrow title={'Savings'} description='Save Up to 40% with Gold Expenses!' />
        <Arrow title='Revolution' description='Join the Movement Today!' />
        <Arrow title='Savings' description='Employers Save with Zero Cost!' />
      </div>
    </section>
  )
}

export default FlowChart
