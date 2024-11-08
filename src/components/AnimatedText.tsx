"use client";
import { TypeAnimation } from 'react-type-animation';

const AnimatedText: React.FC = () => {
    return (

        <div className="relative h-full flex justify-center items-center mt-7 sm:text-lg md:text-xl font-semibold">
            <TypeAnimation
                sequence={[
                    'We are passionate about Web & Data Analytics',
                    1000,
                    'We are passionate about Web Design & Development',
                    1000,
                    'We are passionate about SEO & SEM',
                    1000,
                    'We are passionate about Social Media Marketing ',
                    1000,
                    'We are passionate about Graphic Design',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        </div>
    );
};

export default AnimatedText;
