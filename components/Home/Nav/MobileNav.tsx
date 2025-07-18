import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({showNav, closeNav}: Props) => {

    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]' 
    

  return (
    <div>
        {/* Overlay */}
        <div className={`fixed ${navOpen}  bg-black/70 inset-0 transform transition-all duration-500 z-[1003] w-full h-screen`}></div>
        {/* Navlinks */}
        <div className={`${navOpen} bg-[#121212] text-white fixed justify-center flex flex-col h-full 
        transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] space-y-6 z-[1050]`}>
            {navLinks.map((link) => {
                return (
                    <Link key={link.id} href={link.url} >
                        <p className='text-white sm:text-[30px] w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white '>
                            {link.label}
                        </p>
                    
                    </Link>
                );
            })}
            {/*  Cross icon for close the navbar */}
            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer'/>
        </div>
    </div>
  )
}

export default MobileNav