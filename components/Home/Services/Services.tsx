import React from 'react'
import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <div className='py-16'>
        <div className='w-[80%] mx-auto'>
            {/* Heading */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <h1 className='text-blue-700 dark:text-pink-500 text-lg sm:text-xl md:text-2xl font-bold uppercase'>What we provide</h1>
                    <h1 className='text-xl sm:text-3xl md:text-4xl font-bold mt-1'>Provide High Quality Software&#39;s Service for All Industry</h1>
                </div>
                <div className=' lg:ml-auto'>
                    <a href="#" className='text-white bg-blue-800 hover:bg-blue-900 text-center text-base sm:text-lg md:text-xl w-full py-4 px-8 transition-colors duration-300 ease font-semibold rounded-full uppercase md:w-auto'>
                        All Services
                    </a>
                </div>
            </div>
            {/* Services Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16'>
                <div>
                    <ServicesCard 
                        image="/images/s1.png"
                        title="Custom Softwares Development"
                    />
                </div>
                <div>
                    <ServicesCard 
                        image="/images/s2.png"
                        title="Website Design and Development"
                    />
                </div>
                <div>
                    <ServicesCard 
                        image="/images/s3.png"
                        title="Cloud Computing and Hosting Service"
                    />
                </div>
                <div>
                    <ServicesCard 
                        image="/images/s4.png"
                        title="Ai & Machine Learning Integration"
                    />
                </div>
                <div>
                    <ServicesCard 
                        image="/images/s5.png"
                        title="Android & iOS App Development"
                    />
                </div>
                <div>
                    <ServicesCard 
                        image="/images/s6.png"
                        title="3D Graphics & Vector Designing"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;