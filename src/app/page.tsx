import AboutUs from "@/components/AboutUs";
import BackToTopButton from "@/components/BackToTopButton";
import Banner from "@/components/Banner";
import Company from "@/components/Company";
import ContactEmail from "@/components/ContactEmail";
import Message from "@/components/Message";
import QaN from "@/components/QaN";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {

  return (
    <main className='bg-[#fefefe] text-black font-sans max-w-screen'>
      <Banner></Banner>
      <BackToTopButton></BackToTopButton>
      <Service></Service>
      
      <Message></Message>
      {/* <WhyChooseUs></WhyChooseUs> */}
      <Company></Company>
      <ContactEmail></ContactEmail>
      <Testimonial></Testimonial>
      {/* <QaN></QaN> */}
    </main>
  );
}
