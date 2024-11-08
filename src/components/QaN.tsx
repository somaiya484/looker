"use client"
import { useState } from 'react';

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of marketing services, including website design and development (WordPress, Shopify, Wix, custom-coded), graphics design (ads content design and others without video editing), SEO, SEM (Google ads), Facebook ads, web analytics (Google Tag Manager, Conversion API, Pixel Installation, Google Analytics), and data analytics (Looker Studio, Power BI).',
  },
  {
    question: 'What are your pricing models for different services?',
    answer: 'Our pricing varies based on the service and scope of the project. Please reach out to us for a detailed quote tailored to your specific requirements.',
  },
  {
    question: 'Do you offer ongoing support and maintenance for websites?',
    answer: 'Yes, we provide ongoing support and maintenance services to ensure your website remains up-to-date and secure, allowing you to focus on your business goals.',
  },
  {
    question: 'Am I able to create my own custom service package?',
    answer: 'Absolutely! We understand that every business is unique. We provide flexibility for clients to create custom service packages tailored to their specific requirements and budget.',
  },
  {
    question: 'Why we hire your agency over a freelancer?',
    answer: 'Choosing our agency offers you a team of specialized professionals across various disciplines, ensuring expertise, reliability, and scalability all together. We provide comprehensive support, consistency in service delivery, and a broader range of capabilities compared to an individual freelancer.',
  },
  {
    question: 'When can I expect to see growth or results from your services?',
    answer: 'The timeline for experiencing growth or results varies depending on factors like the service chosen, your current online presence, market conditions, and competition. We focus on delivering measurable results through strategic planning and continuous optimization.',
  },
  {
    question: 'Do you exclusively provide one service, or can I combine multiple services?',
    answer: 'We offer a range of integrated services that can be combined to create a holistic marketing strategy tailored to achieve your business objectives. Whether you need one specific service or a comprehensive marketing solution, we can accommodate your needs.',
  },
  {
    question: 'Do you provide any guarantees for your services?',
    answer: 'We stand behind the quality of our work and strive for client satisfaction. While results can vary based on factors beyond our control, we commit to delivering transparent communication, dedicated support, and measurable outcomes aligned with agreed-upon objectives.',
  },
  {
    question: 'How can I get started with your services?',
    answer: 'You can get started by contacting us through our website. We\'ll discuss your needs and create a customized plan for you.',
  }
];

const QaN: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div id='QaN' className=" p-4 my-16 flex justify-center page-background">

      <div className="space-y-4 w-full md:w-[65%] mt-10 md:mt-0" data-aos="fade-up" data-aos-duration="1000">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-xl md:text-4xl font-semibold text-gray-800 text-center">Have More </h1>
          <h1 className="text-3xl md:text-7xl font-semibold mb-8 text-red-500 text-center">Questions? </h1>
          <p className='text-lg text-center mb-10 text-gray-700 font-semibold'>We have already addressed some of our frequently asked questions.</p>
        </div>

        {faqs.map((faq, index) => (
          <div key={index} className="border border-b-8 rounded-lg border-gray-600 p-4 transition-transform transform hover:scale-105 md:hover:scale-110  hover:shadow duration-300">
            <button
              className="w-full text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-2xl font-bold">{faq.question}</span>
              <span className="text-2xl font-bold">{activeIndex === index ? '-' : '+'}</span>
            </button>

            <div
              className={`overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ transition: 'max-height 0.5s ease', maxHeight: activeIndex === index ? '24rem' : '0' }}
            >
              <p className={`mt-8 font-semibold text-gray-700 text-lg ${activeIndex === index ? 'block' : 'hidden'}`}>{faq.answer}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default QaN;
