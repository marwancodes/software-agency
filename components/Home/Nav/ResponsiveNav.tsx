'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';


type Props = {
    openNav: ()=> void;
}

const ResponsiveNav = ({}: MobileNavProps) => {

    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(true);
      }
    
      const handleCloseNav = () => {
        setShowNav(false);
      }

  return (
    <div>
        <Navbar openNav={handleShowNav} />
        <MobileNav showNav={showNav} closeNav={handleCloseNav}/>
    </div>
  )
}

export default ResponsiveNav