import Marquee from "react-fast-marquee";

const Company: React.FC = () => {
    return (
        <div className='mt-32 mx-2 md:mx-8' id="company">
            <h2 className='text-center text-5xl font-bold primary-text pb-3'>Amazing Client</h2>


            <Marquee pauseOnHover speed={100} direction="left" className='order g-4 hover:cursor-pointer'>
                <div className="flex items-center gap-5 md:gap-36  mt-20">
                    <img src='/partner3.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-40 ml-5 md:ml-24" />
                    <img src='/partner5.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-40" />
                    <img src='/partner6.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner19.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner20.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner7.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-44" />
                    <img src='/partner8.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                </div>
            </Marquee>

            <Marquee pauseOnHover speed={100} direction="right" className='order g-4 mt-14 hover:cursor-pointer'>
                <div className="flex items-center gap-5 md:gap-36">
                    <img src='/partner9.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-44 ml-5 md:ml-24 " />
                    <img src='/partner10.jpg' width={250} height={250} alt="Company Logo" className="w-24 md:w-40" />
                    <img src='/partner11.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner13.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner14.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner16.jpg' width={250} height={250} alt="Company Logo" className="w-24 md:w-44" />
                    <img src='/partner17.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-44" />
                    <img src='/partner2.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-40" />
                </div>
            </Marquee>
        </div>
    );
};

export default Company;
