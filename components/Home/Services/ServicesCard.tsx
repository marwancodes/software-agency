import Image from 'next/image';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

interface Props {
    image: string;
    title: string;
}

const ServicesCard = ({image, title}: Props) => {
  return (
    <div className='bg-gray-100 dark:bg-blue-950 hover:bg-blue-800 p-6
        transition-all duration-500 group relative shadow rounded-xl cursor-pointer'>
        <Image 
            src={image}
            alt={title}
            width={60}
            height={60}
            className='object-contain'
        />
        <h1 className='text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500'>
            {title}
        </h1>
        <p className='text-gray-500 font-medium mt-4 dark:text-gray-200 group-hover:text-gray-300 transition-all duration-500'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quidem temporibus optio explicabo! Provident excepturi perferendis
            laboriosam! Vero, vitae,  repellat excepturi itaque illum magnam!
        </p>
        <div className='mt-6 text-xl font-medium flex items-center gap-1 group-hover:text-white transition-all duration-500'>
            <span>Learn More</span>
            <span><GoArrowUpRight /></span>
        </div>
    </div>
  )
}

export default ServicesCard