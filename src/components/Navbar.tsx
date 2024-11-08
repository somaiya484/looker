"use client";
import React, { useState, useEffect } from 'react';
import { IoMdMenu, IoMdCall, IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState(false);

    const handleSubMenuToggle = (index: number) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };

    const handleSubCategoryClick = () => {
        setOpenSubMenu(null);
        setOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
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
                            className="h-[80px] w-full"
                        />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl md:hidden cursor-pointer mr-4'>
                    <IoMdMenu />
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-20' : '-top-96'} ${open ? 'flex flex-col md:flex-row bg-white md:bg-transparent' : 'hidden'} justify-center`}>
                    <li className='md:ml-4  md:mt-0 mt-2 relative group'>
                        <Link href="/#services" className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base'>
                            Services
                        </Link>
                    </li>
                    <li className='md:ml-4 lg:ml-10 md:mt-0 mt-2 relative group'>
                        <Link href="/#process" className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base'>
                            Process
                        </Link>
                    </li>
                    <li className='md:ml-4 lg:ml-10 md:mt-0 mt-2 relative group'>
                        <Link href="/#samples" className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base'>
                            Work Samples
                        </Link>
                    </li>
                    <li className='md:ml-4 lg:ml-10 md:mt-0 mt-2 relative group'>
                        <Link href="/#aboutus" className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base'>
                            About Us
                        </Link>
                    </li>
                    <li className='md:ml-4 lg:ml-10 md:mt-0 mt-2 relative group'>
                        <Link href="/#testimonial" className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base'>
                            Testimonials
                        </Link>
                    </li>
                    {/* <li className='md:ml-4 lg:ml-6 md:mt-0 mt-2 relative group'>
                        <Link href='/looker' className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base'>
                            About Us
                        </Link>
                    </li>
                    <li className='md:ml-4 lg:ml-6 md:mt-0 mt-2 relative group'>
                        <Link href='/looker' className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base'>
                            About Us
                        </Link>
                    </li>

                    <li className='md:ml-4 lg:ml-6 md:mt-0 mt-2 relative group'>
                        <div className='flex items-center cursor-pointer' onClick={() => handleSubMenuToggle(0)}>
                            <p className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base'>
                                Analytics
                                <IoIosArrowDown className='ml-1 text-lg text-gray-600' />
                            </p>
                        </div>
                        {openSubMenu === 0 && (
                            <ul className='md:absolute md:left-0 mt-2 w-full md:w-48 bg-white shadow-md rounded-md z-50'>
                                <li>
                                    <Link href='/datavisualization' className='block px-4 py-2 text-gray-800 hover:bg-orange-100' onClick={handleSubCategoryClick}>
                                        Data Visualization
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/webanalytics' className='block px-4 py-2 text-gray-800 hover:bg-orange-100' onClick={handleSubCategoryClick}>
                                        Web and App
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className='md:ml-4 lg:ml-6 md:mt-0 mt-2 relative group'>
                        <div className='flex items-center cursor-pointer' onClick={() => handleSubMenuToggle(1)}>
                            <p className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base'>
                                Marketing
                                <IoIosArrowDown className='ml-1 text-lg text-gray-600' />
                            </p>
                        </div>
                        {openSubMenu === 1 && (
                            <ul className='md:absolute md:left-0 mt-2 w-full md:w-48 bg-white shadow-md rounded-md z-50'>
                                <li>
                                    <Link href='/sem' className='block px-4 py-2 text-gray-800 hover:bg-orange-100' onClick={handleSubCategoryClick}>
                                        SEM
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/smm' className='block px-4 py-2 text-gray-800 hover:bg-orange-100' onClick={handleSubCategoryClick}>
                                        SMM
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className='md:ml-4 lg:ml-6 md:mt-0 mt-2 relative group'>
                        <div className='flex items-center cursor-pointer' onClick={() => handleSubMenuToggle(2)}>
                            <p className='hover:text-orange-600 focus:text-orange-600 duration-200 flex items-center font-semibold text-base'>
                                Design and Development
                                <IoIosArrowDown className='ml-1 text-lg text-gray-600' />
                            </p>
                        </div>
                        {openSubMenu === 2 && (
                            <ul className='md:absolute md:left-0 mt-2 w-full md:w-48 bg-white shadow-md rounded-md z-50'>
                                <li>
                                    <Link href='/graphicsdesign' className='block px-4 py-2 text-gray-800 hover:bg-orange-100' onClick={handleSubCategoryClick}>
                                        Graphic Design
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/webdesigndevelopment' className='block px-4 py-2 text-gray-800 hover:bg-orange-100' onClick={handleSubCategoryClick}>
                                        Development
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li> */}
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
