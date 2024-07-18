import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/public/images/logo-big.png"

const Navbar = () => {
    return (
        <div className='max-w-8xl mx-auto flex items-center justify-between px-20 py-5 h-28 overflow-hidden text-white'>
            <div className='w-32'>
                <Image src={Logo} alt={'Brand Logo'} />
            </div>
            <div className='w-max'>
                <nav className='w-full nav-items'>
                    <ul className='list-none flex items-center justify-between gap-5'>
                        <li><Link href={''}>Home</Link></li>
                        <li><Link href={''}>Why Value1</Link></li>
                        <li><Link href={''}>About Us</Link></li>
                        <li><Link href={''}>Partner With Us</Link></li>
                        <li><Link href={''}> Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <Link href={''} className='text-black font-semibold px-5 py-3 bg-gold-300 rounded-xl hover:bg-gold-500 smooth'>Free Trial</Link>
                <Link href={''} className='text-black font-semibold px-5 py-3 bg-gold-300 rounded-xl hover:bg-gold-500 smooth'>Sign In</Link>
            </div>
        </div>
    )
}

export default Navbar