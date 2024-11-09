"use client"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

const AboutUs: React.FC = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='mt-20 page-background' id='aboutus'>

            <div className='w-[98%] mx-auto md:flex justify-center items-center gap-5 mt-10 md:pl-10'>
                <div data-aos="fade-up"
                    data-aos-duration="1000"
                    className="w-full md:w-[45%]">
                    <img
                        src='/ab.png'
                        width={650}
                        height={500}
                        alt="About us"
                        className='md:pl-5 rounded'
                    />

                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000"
                    className="w-full md:w-[50%]">

                    <div className='md:pr-16 text-balance text-center md:text-left'>
                        <h2 className=' font-bold primary-text mt-5 md:mt-0'>Who We Are</h2>
                        <p className='text-3xl md:text-5xl mt-6 leading-10 font-semibold'>SOLUTIONS THAT</p>
                        <p className='text-3xl md:text-5xl mt-4 leading-10 font-semibold'>INSPIRE GROWTH</p>
                        <p className='mt-8 mb-4 leading-7 md:text-xl px-6 md:px-0'>Hexa Looker is your strategic partner in transforming data into clear, actionable insights. <span className='font-bold text-gradient'>Specializing in Looker Studio reporting,</span> we provide tailored analytics solutions that not only showcase metrics but also bring clarity and direction to your business decisions. <br /><br />Our mission is to unlock the potential within your data. We blend innovative design with strategic analysis to deliver reports that resonate. Our team is passionate about precision, creativity, and continuous improvement, ensuring that <span className='font-bold text-gradient'>  your brand stays ahead of the curve. </span> Partner with us and experience data-driven success with Hexa Looker.
                        </p>

                        <div className='flex justify-center sm:justify-start'>
                            <Link
                                href='/contact'
                                className='secondary-button mt-5 sm:mt-0 w-[200px] transition-transform transform hover:scale-105 duration-300 text-center'
                            >
                                Get Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default AboutUs;
