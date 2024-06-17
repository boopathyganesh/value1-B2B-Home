import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/public/images/logo-big.png"

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-20 py-5 h-24 overflow-hidden border-b border-gold-300 text-white'>
            <div className='w-32'>
                <Image src={Logo} alt={'Brand Logo'} />
            </div>
            <div className='w-1/3'>
                <nav className='w-full nav-items'>
                    <ul className='list-none flex items-center justify-between'>
                        <li><Link href={''}>Home</Link></li>
                        <li><Link href={''}>Why Value1</Link></li>
                        <li><Link href={''}>About Us</Link></li>
                        <li><Link href={''}>Partner With Us</Link></li>
                        <li><Link href={''}> Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <Link href={''} className='px-5 py-3 bg-gold-400 rounded-lg hover:bg-gold-500 smooth'>Sign In</Link>
            </div>
        </div>
    )
}

export default Navbar