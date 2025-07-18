import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative bg-[#121312] w-full h-screen flex flex-col justify-center items-center md:pt-20'>
        <div className='w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center-' >
            {/* Text Content */}
            <div>
                {/* Subheading */}
                <p className='text-white text-sm sm:text-base md:text-xl font-bold'>
                    The Top Software Development Company In The UK
                </p>
                {/* Heading */}
                <h1 className='text-white text-4xl md:text-5xl lg:text-7xl my-6 font-bold leading-[2.5rem] md:leading-[4rem]'>
                    Providing Software solutions for your any <span className='text-yellow-300'>business</span>
                </h1>
                {/* Description */}
                <p className='text-gray-300 text-sm md:text-lg sm:text-base font-medium'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    ut odio fugit, illo saepe voluptatem cum, eos amet ab. 
                    Nulla magni neque eveniet sint quas rerum! Eos!
                </p>
                {/* Button */}
                <Button title="Discover More" styles="mt-8"/>
            </div>
            {/* Image Content */}
            <div className='mx-auto hidden xl:block'>
                <Image src="/images/hero.png" alt="Hero section illustration" width={900} height={900} />
            </div>
        </div>
    </div>
  )
}

export default Hero