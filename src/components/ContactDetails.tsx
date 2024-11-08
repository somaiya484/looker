"use client"
import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactDetails: React.FC = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className="md:flex px-8 gap-16 items-center service-bg py-24 w-full">

                <div className="md:w-[50%] -ml-8">
                    <img
                        src='/WordPressDevelopment.jpg'
                        alt="Company Logo"
                        className="rounded-e-3xl w-full"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    />
                </div>

                <div className="md:w-[50%] mt-10 md:mt-0" data-aos="fade-up" data-aos-duration="1500">
                    <h1 className="text-4xl font-semibold text-gradient">Contact</h1>
                    <div className="flex items-center gap-4 text-lg mt-8"><IoLocationOutline className="text-3xl primary-text" /><p>Mirpur-10, Dhaka - 1216, BD</p></div>
                    <div className="flex items-center gap-4 text-lg mt-8"><IoMailOutline className="text-3xl primary-text" /><a className="link link-hover hover:underline" href={`mailto:admin@infologicsolution.com`}>nusratxaahan@gmail.com</a></div>
                </div>

            </div>
        </div>
    );
};

export default ContactDetails;
