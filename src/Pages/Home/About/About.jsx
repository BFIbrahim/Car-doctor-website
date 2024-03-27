
import img1 from '../../../assets/images/about_us/parts.jpg'
import img2 from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative mb-20'>
                        <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={img1} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                    </div>

                    <div className='lg:w-1/2'>

                        <p className='text-[#FF3811] font-bold'>About Us</p>

                        <p className="py-6 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p className='mb-4 text-gray-500 '>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn bg-[#FF3811] text-white font-semibold hover:text-black">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;