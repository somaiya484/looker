import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import QaN from "@/components/QaN";
import Company from "@/components/Company";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {

    return (
        <div>
            <div className="page-background pt-7 pb-20 w-full h-full overflow-auto">
                {/* <p className='primary-text text-center text-7xl text-gradient font-bold mt-32'>Contact Us Today</p> */}
                <div className="md:flex justify-between items-center px-8 mt-32 gap-20 w-[96%]">
                    <div>
                        <h1 className="text-5xl text-gradient font-bold">Get In Touch</h1>
                        <p className="text-xl mt-10 text-gray-700">Whether you choose to drop us a line, please reach out on social media or fill out the lead form. We will make sure to get right back to you!</p>
                        {/* <div className="mt-28">
                            <p className="text-xl text-gray-600 font-bold">Follow Us On Social Media</p>
                            <div className="flex gap-8 items-center mt-5 text-3xl text-orange-700">
                            <a href='https://www.linkedin.com/company/infologicsolution/'   className='cursour-pointer hover:text-orange-600' ><FaLinkedin /></a>
                        <a href=' https://www.instagram.com/infologicsolution/'   className='cursour-pointer hover:text-orange-600' ><FaInstagram /></a>
                        <a href='https://www.facebook.com/infologicsolution/'   className='cursour-pointer hover:text-orange-600' ><FaFacebookF /></a>
                        <a href='https://www.youtube.com/@InfoLogicSolutions'   className='cursour-pointer hover:text-orange-600' ><FaYoutube /></a>
                            </div>
                        </div> */}
                    </div>
                    <div className="w-full">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
            <div className="-mt-16 mb-20"><Company /></div>
            <ContactDetails />
            <QaN />
        </div>
    );
};

export default Contact;
