"use client";
import React, { useState, useEffect } from 'react';
import { IoMdMenu, IoMdCall } from "react-icons/io";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    const handleMenuItemClick = () => {
        setOpen(false); // Close the menu after clicking a menu item
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-[radial-gradient(circle,_rgba(255,165,0,0.8)_0%]'} `}>
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex items-center'>
                    <Link href='/'>
                        <img
                            src='/Hexa-Looker.png'
                            width={230}
                            height={80}
                            alt="Company Logo"
                            className="md:h-[80px] md:w-full"
                        />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl md:hidden cursor-pointer mr-4'>
                    <IoMdMenu />
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-20' : '-top-96'} ${open ? 'flex flex-col md:flex-row bg-white md:bg-transparent' : 'hidden'} justify-center`}>
                    <li className='md:ml-4 md:mt-0 mt-2 relative group'>
                        <Link href="/#services" className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base' onClick={handleMenuItemClick}>
                            Services
                        </Link>
                    </li>
                    <li className='md:ml-4 lg:ml-10 md:mt-0 mt-2 relative group'>
                        <Link href="/#process" className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base' onClick={handleMenuItemClick}>
                            Process
                        </Link>
                    </li>
                    <li className='md:ml-4 lg:ml-10 md:mt-0 mt-2 relative group'>
                        <Link href="/#samples" className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base' onClick={handleMenuItemClick}>
                            Work Samples
                        </Link>
                    </li>
                    <li className='md:ml-4 lg:ml-10 md:mt-0 mt-2 relative group'>
                        <Link href="/#aboutus" className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base' onClick={handleMenuItemClick}>
                            About Us
                        </Link>
                    </li>
                    <li className='md:ml-4 lg:ml-10 md:mt-0 mt-2 relative group'>
                        <Link href="/#testimonial" className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base' onClick={handleMenuItemClick}>
                            Testimonials
                        </Link>
                    </li>
                </ul>

                <Link href='/contact' className='hidden md:block pr-4'>
                    <button className='primary-button flex items-center transition-transform transform hover:scale-105 duration-300'>
                        Contact Us <IoMdCall className='text-xl ml-2' />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
