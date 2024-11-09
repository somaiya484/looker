import Link from 'next/link';
import { AiFillTags } from "react-icons/ai";
import AboutUs from './AboutUs';

interface Section {
    id: number;
    img: string;
    title: string;
    description: string;
}

interface ProcessStep {
    id: number;
    title: string;
    description: string;
}

interface WorkSample {
    id: number;
    category: string;
    img: string;
    title: string;
    link: string;
}

interface ServicePageProps {
    sections: Section[];
    processSteps: ProcessStep[];
    workSamples: WorkSample[];
}

const sections: Section[] = [
    {
        id: 1,
        img: "look.png",
        title: "Looker Reporting",
        description:
            "Transform raw data into actionable insights with Looker Studio. We create comprehensive and interactive reports that help you make data-driven decisions and understand key performance metrics at a glance.",
    },
    {
        id: 2,
        img: "23.jpg",
        title: "Custom Reporting",
        description:
            "Need something unique? We offer custom reporting solutions tailored to your specific requirements. Whether it's combining multiple data sources or creating bespoke visualizations, we've got you covered.",
    }
];

const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "Data Collection",
        description: "We gather and analyze your data sources, ensuring we have all the necessary information to create meaningful visualizations."
    },
    {
        id: 2,
        title: "Data Processing",
        description: "Our team processes the collected data, cleaning and structuring it to ensure accuracy and relevance for the reports."
    },
    {
        id: 3,
        title: "Visualization",
        description: "We design and develop interactive and visually appealing reports that make complex data easy to understand and act upon."
    },
    {
        id: 4,
        title: "Review & Feedback",
        description: "We review the reports with you, incorporating your feedback to ensure the final product meets your expectations and needs."
    }
];

const workSamples: WorkSample[] = [
    {
        id: 1,
        category: "Looker Studio",
        img: "1.jpg",
        title: "Promo Business - Report",
        link: 'https://lookerstudio.google.com/reporting/d6375d72-f428-413d-86a0-d815f627be2d',
    },
    {
        id: 2,
        category: "Looker Studio",
        img: "2.jpg",
        title: "Architectural - Report",
        link: 'https://lookerstudio.google.com/u/0/reporting/f9f8a5b5-145b-4312-8992-c0783b7d62de/page/p_i69ns9r9fd',
    },
    {
        id: 3,
        category: "Looker Studio",
        img: "3.jpg",
        title: "Vacation Rental - Report",
        link: 'https://lookerstudio.google.com/reporting/ad232a63-0375-4c88-bd6e-371ec96b420a',
    },
    {
        id: 4,
        category: "Looker Studio",
        img: "4.jpg",
        title: "Debisca - Ecommerce",
        link: 'https://lookerstudio.google.com/reporting/82ce4ad1-5e15-41e9-b0c8-7812d928ffc0',
    },
    {
        id: 6,
        category: "Looker Studio",
        img: "6.jpg",
        title: "Nitro House - Lead",
        link: 'https://lookerstudio.google.com/reporting/04f4c7a9-9940-42ad-af52-8cf1d5daa1a2',
    },
    {
        id: 7,
        category: "Looker Studio",
        img: "7.jpg",
        title: "WW Trauma - Survey",
        link: 'https://lookerstudio.google.com/reporting/f7857c5f-9ea2-40bb-aadd-dcbb0b5ec95d',
    },
    {
        id: 8,
        category: "Looker Studio",
        img: "8.jpg",
        title: "PK4 - Student Tracking",
        link: 'https://lookerstudio.google.com/reporting/b9322e31-ea0e-426e-ae9b-5716332ebdfc',
    },
    {
        id: 9,
        category: "Looker Studio",
        img: "9.jpg",
        title: "Kubla - Report",
        link: 'https://lookerstudio.google.com/reporting/a28e4820-6555-4083-82fa-9d31866c93c5',
    }
];

const Service: React.FC<ServicePageProps> = ({ sections, processSteps, workSamples }) => {
    return (
        <div className='mt-28' id='services'>
            <div className="text-center">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-5xl font-bold primary-text mb-6">Our Services</h2>
                    <p className="md:text-xl">Let's take your brand to the next level with our comprehensive suite of <br /> Looker services.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <svg
                        width="500"
                        height="60"
                        viewBox="0 0 200 40"
                        className="hidden md:block mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 20 30 Q 100 0 180 30"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                            fill="transparent"
                        />
                        <defs>
                            <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#f97316" />
                                <stop offset="50%" stopColor="#ef4444" />
                                <stop offset="100%" stopColor="#f59e0b" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="page-background px-3 md:px-0">
                <div className="container mx-auto grid md:grid-cols-2 gap-16 px-2 md:px-16 lg:px-24">
                    {sections.map((section) => (
                        <div key={section.id} data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative shadow-md rounded-lg px-4 pt-14 transition-transform transform hover:scale-105 duration-300 bg-white mt-16">
                                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                                    <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto ">
                                        <img src={`/${section.img}`} width={300} height={180} alt={section.title} className="object-cover rounded-lg h-[250px] md:h-[260px] w-[500px] shadow-lg" />
                                    </div>
                                </div>
                                <div className="p-6 mt-32 md:mt-36 pb-10">
                                    <h2 className="text-2xl md:text-4xl mt-3 mb-5">{section.title}</h2>
                                    <p className="text-gray-700 mb-7 text-lg">{section.description}</p>
                                    <Link href='/contact'>
                                        <button className="px-4 py-2 gradient-background2 border-b-2 border-l-2 border-r-2 border-orange-200 font-semibold rounded text-base hover:scale-105 duration-200 hover:border-orange-300">Reach Us</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Process Steps Section */}
            <div id='process' data-aos="fade-up" data-aos-duration="1000">
                <h1 className="font-bold text-center text-4xl mt-10 mb-10">Our <span className="text-gradient">Process</span></h1>
                <p className="text-center md:text-lg">
                    Do you dream of exploring the furthest reaches of outer space? <br />
                    Do you live for bringing brands to life and finding new ways to tell exciting
                    brand stories? <br />
                    If so, you may have just found your people.
                </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">
                <div className="grid md:grid-cols-4 px-6 gap-6 mt-8 page-background">
                    {processSteps.map((step) => (
                        <div key={step.id} className="border-b pb-5 border-gray-700 hover:border-transparent duration-300 ease-in-out transition-transform transform hover:scale-105 md:hover:scale-110">
                            <h1 className="text-4xl md:text-7xl text-gradient font-bold">{step.id}.</h1>
                            <h2 className="text-xl md:text-2xl font-semibold mt-12">{step.title}</h2>
                            <p className="md:text-lg font-semibold text-stone-600 mt-3">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            <AboutUs></AboutUs>

            {/* Work Samples Section */}
            <div id='samples' className="bg-white text-black">
                <div data-aos="fade-up" data-aos-duration="1000"><h1 className="text-gradient font-bold text-center text-5xl mt-32 mb-20">Work Samples</h1></div>

                <div className="mx-auto grid md:grid-cols-3 gap-10 px-10 md:px-16">
                    {workSamples.map((sample) => (
                        <div key={sample.id} className="sample-style" data-aos="fade-up" data-aos-duration="1000">
                            <img src={`/${sample.img}`} width={250} height={250} alt="Company Logo" className="rounded-2xl w-full md:h-60 object-cover shadow-lg shadow-orange-100" />

                            <div className="sample-inner-style">
                                <div className="text-center text-white p-6">
                                    <h3 className="text-lg font-semibold italic mb-5 text-center">{sample.category}</h3>
                                    <a href={sample.link} className="sample_button">Preview</a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold my-8 text-center flex items-center gap-1"><AiFillTags className="text-amber-500" /> {sample.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function ServicesPage() {
    return <Service sections={sections} processSteps={processSteps} workSamples={workSamples} />;
}
