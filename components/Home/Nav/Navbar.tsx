'use client';

import React, { useEffect, useState } from 'react';
import { GiEagleEmblem } from 'react-icons/gi';
import { navLinks } from '@/constants/constant';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';


type Props = {
    openNav: ()=> void;
}

const Navbar = ({openNav}: Props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
        if (window.scrollY >= 90) { setNavBg(true)};
        if (window.scrollY < 90) { setNavBg(true)};
    };

    window.addEventListener('scroll', handler);

    return () => { window.removeEventListener('scroll', handler); }

  }, []);


  return (
    <div className={`transition-all ${navBg ? "bg-blue-900 shadow-md" : "fixed"} duration-200 h-[10vh] z-[100] fixed w-full bg-[#121212]`}>
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
            {/* LOGO */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-col'>
                    <GiEagleEmblem className='w-6 h-6 text-black'/>
                </div>
                <h1 className='text-white text-xl hidden sm:block md:text-2xl font-bold'>Tech Agency</h1>
            </div>

            {/* Navlinks */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => (
                    <Link href={link.url} key={link.id} >
                    <p className="text-[#f5f5f7] hover:text-yellow-500 font-semibold transition-all duration-200 cursor-pointer">
                      {link.label}
                    </p>
                  </Link>
                ))}
            </div>

            {/* Buttons */}
            <div className='flex items-center space-x-4'>
                {/* 1st button create an account button */}
                <a href="" className='text-white px-5 py-2.5 relative rounded group font-medium inline-block'>
                    <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500'></span>
                    <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500'>   </span>
                    <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500'></span>
                    <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br from-blue-500 to-purple-600'></span>
                    <span className='relative'>Create Account</span>
                </a>
            </div>
            {/* ThemeToggler */}
            {/* Burger Menu */}
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
        </div>
    </div>
  )
}

export default Navbar;