import { SlCalender } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";



const ContactBar = () => {
    return (
        <div className="bg-[#151515] p-10 py-16 md:grid grid-cols-3 rounded-md mb-10">
            <div className="flex gap-5 text-white mb-10 md:mb-0 lg:mb-0">
                <div className="content-center">
                    <SlCalender className="text-5xl text-white font-bold"></SlCalender>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
                </div>
            </div>

            <div className="flex gap-5 text-white  mb-10 md:mb-0 lg:mb-0">
                <div className="contect-center text-white">
                    <FaPhoneAlt className="text-5xl"></FaPhoneAlt>
                </div>
                <div>
                    <p>Have a question?</p>
                    <h1 className="text-2xl font-bold">+2546 251 2658</h1>
                </div>
            </div>

            <div className="flex gap-5 text-white">
                <div>
                    <FaMapLocationDot className="text-5xl"></FaMapLocationDot>
                </div>
                <div>
                    <p>Need a repair? our address</p>
                    <h1 className="text-2xl font-bold">Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default ContactBar;