import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto bg-black px-4 text-white'>
      <h1 className='font-ibm w-full text-3xl font-bold text-[#FDB927]'>LeTherapy</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <a href="https://www.lebronjames.com/" target="_blank" rel="noopener noreferrer">
            Resources
          </a>
        </li>
        <li className='p-4'>
          <a href="https://www.lebronjames.com/" target="_blank" rel="noopener noreferrer">
            About
          </a>
        </li>
        <li className='p-4'>
          <a href="https://www.lebronjames.com/" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <li className='p-4 border-b border-gray-600'>
          <a href="https://www.lebronjames.com/" target="_blank" rel="noopener noreferrer">
            Resources
          </a>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <a href="https://www.lebronjames.com/" target="_blank" rel="noopener noreferrer">
            About
          </a>
        </li>
        <li className='p-4'>
          <a href="https://www.lebronjames.com/" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
