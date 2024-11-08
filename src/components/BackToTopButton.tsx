"use client";
import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={`fixed bottom-4 md:right-4 p-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg cursor-pointer transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollToTop}
            style={{ zIndex: 1000 }} // Ensure it is above other elements
        >
            <MdKeyboardDoubleArrowUp size={27} />
        </div>
    );
};

export default BackToTopButton;
