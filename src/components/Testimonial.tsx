"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './instructor.css';

interface TestimonialData {
    name: string;
    role: string;
    feedback: string;
    rating: number;
}

const testimonials: TestimonialData[] = [
    {
        name: "Michelle Bes",
        role: "Entrepreneur",
        feedback: "It was exceptional. They jumped straight on the project, provided clear information, and sorted out the issue in record time. I honestly could not have dreamt of a better outcome and I cannot thank Hexa Looker enough. I almost don't want to write this review (so I can keep this agency all to myself). HIGHLY recommend. Will use again.",
        rating: 5,
    },
    {
        name: "Nick Jude",
        role: "Entrepreneur",
        feedback: "Great communication. Amazing job on the project. I would not pick another Agency to work on my projects. Hexa Looker will be the top of my priority",
        rating: 5,
    },
    {
        name: "Jaide Daniel",
        role: "Digital Marketer",
        feedback: "We were highly impressed for quick and exceptional work. We needed someone to address our tracking issues, and the Analytics Team delivered outstanding results. They did not hesitate to invest extra time to ensure everything was 100% accurate. We highly recommend Hexa Looker to anyone facing tracking problems.",
        rating: 5,
    },
    {
        name: "Nicola Caleman",
        role: "Social Media Expert",
        feedback: "I received a beautiful Google Data Studio dashboard that my client will be thrilled with. Will take the Web Analytics service in future for sure. Thank you!!",
        rating: 5,
    },
    {
        name: "William Edward",
        role: "Businessman",
        feedback: "I am delighted with the exceptional service provided, and the powerful high DA SEO backlinks I received have significantly boosted my website's ranking. Thank you for the high DA authority link-building service.",
        rating: 5,
    },
    {
        name: "Nahiya Mitra",
        role: "SEO Expert",
        feedback: "I knew nothing about websites and asked for help. What I received went above and beyond my expectations. The WordPress team is made up of well-spoken, attentive, nice guys to work with to build your website. There wasn't any request I had for them that they couldn't handle. Hexa Looker should definitely be your next agency for your required services.",
        rating: 5,
    },
    {
        name: "Ezabella",
        role: "Entrepreneur",
        feedback: "This seller provided the clearest explanation of backlinks I've ever heard. Their expertise is impressive! Thank you for the high-quality work. I will definitely place another order soon.",
        rating: 5,
    },
    {
        name: "Emiliy Wastine",
        role: "Founder",
        feedback: "Hexa Looker executed our web development project flawlessly, demonstrating exceptional coding expertise and attention to detail. Working with this agency was effortless, thanks to the team's deep understanding of the project, timely delivery, and outstanding cooperation. The project not only met but exceeded our expectations—truly amazing, fast, and great work. We will definitely hire them again!",
        rating: 5,
    }
];

const Testimonial: React.FC = () => {
    return (
        <div className="page-background overflow-hidden mt-24" id="testimonial">

            <h2 className='text-center text-5xl font-bold primary-text pb-3'>Clients Testimonials</h2>

            <div data-aos="fade-up" data-aos-duration="1000">


                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper w-[80%] mx-auto"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-orange-500 flex flex-col justify-center items-center text-center">
                            <div className="mb-4 mt-5">
                                <h2 className="text-2xl font-bold text-amber-600 italic">{testimonial.name}</h2>
                                <p className="text-base font-medium text-red-700">{testimonial.role}</p>
                            </div>
                            <p className=" italic text-gray-800 mb-4">"{testimonial.feedback}"</p>
                            <div className="flex justify-center items-center">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <span key={i} className="text-orange-400">&#9733;</span>
                                ))}
                                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                                    <span key={i} className="text-gray-300">&#9733;</span>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
