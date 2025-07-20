import SectionButton from '@/components/ui/SectionButton'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='py-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/* Image content */}
            <div>
                <Image src={"/images/about.png"} alt='About' width={700} height={700} />
            </div>
            {/* Text content */}
            <div>
                <p className='text-blue-700 dark:text-pink-500 text-sm sm:text-base md:text-xl font-bold uppercase'>
                    About us
                </p>
                <h1 className='text-2xl md:text-3xl lg:text-5xl mt-4 font-bold leading-[1.8rem] md:leading-[3rem]'>
                    We are a software development company that provides high quality software solutions for your business.
                </h1>
                <p className='text-gray-500 dark:text-gray-300 mt-4 text-sm md:text-base font-medium'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non praesentium doloribus aperiam cupiditate in ex reprehenderit tempore.
                </p>
                <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 '>
                    <div className='flex items-center gap-4'>
                        <Image src={"/images/a1.png"} alt='' width={50} height={50} />
                        <h2 className='text-lg sm:text-xl font-bold leading-5'>IT Infrastucture <br /> Management</h2>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image src={"/images/a2.png"} alt='' width={50} height={50} />
                        <h2 className='text-lg sm:text-xl font-bold leading-5'>IT Infrastucture <br /> Management</h2>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image src={"/images/a3.png"} alt='' width={50} height={50} />
                        <h2 className='text-lg sm:text-xl font-bold leading-5'>IT Infrastucture <br /> Management</h2>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image src={"/images/a4.png"} alt='' width={50} height={50} />
                        <h2 className='text-lg sm:text-xl font-bold leading-5'>IT Infrastucture <br /> Management</h2>
                    </div>
                </div>
                {/* Button */}
                <div className="mt-10">
                    <SectionButton name='About More' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About