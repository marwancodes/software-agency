import React from 'react';

interface Props {
    name?: string;
}

const SectionButton = ({name}: Props) => {
  return (
    <>
        <a href="#_" className='text-white bg-blue-800 hover:bg-blue-900 text-center text-base sm:text-lg md:text-xl w-full py-4 px-8 transition-colors duration-300 ease font-semibold rounded-full uppercase md:w-auto'>
            {name ? name : 'Button'}
        </a>
    </>
  )
}

export default SectionButton