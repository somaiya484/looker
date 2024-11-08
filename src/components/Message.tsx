"use client";

import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import { useEffect, useState } from "react";
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const Message = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true    
        });

        const handleScroll = () => {
            if (!isAnimated) {
                AOS.refresh(); 
                setIsAnimated(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isAnimated]);

    return (
        <div className='py-20 mt-24 bg-gray-800'>
            <div data-aos="fade-up" data-aos-duration="900">
                <div className="mx-auto flex flex-col md:flex-row justify-center items-center gap-10 text-center">
                    <p className='text-2xl md:text-4xl font-bold animate-text-color-change'>
                        We make the creative solutions for modern brands
                    </p>
                    <Link href='/contact'   className='hidden md:block'>
                        <button className='primary-button flex items-center transition-transform transform hover:scale-105 duration-300'>
                            Contact Us <IoMdCall className='text-xl ml-2' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Message;
