import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mt-16 rounded-md">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img5} className="w-full h-full max-h-[500px] rounded-md" />
                    <div className="absolute flex md:p-20 p-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white space-y-7 md:w-2/5">
                            <h2 className="md:text-5xl lg:text-5xl text-2xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="lg:flex lg:gap-5 hidden lg:block">
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#FF3811] border-none">Discover More</button>
                                <button className="btn text-white bg-transparent hover:bg-[#FF3811] hover:border-none">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-4 bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowLeft className="size-5 text-white" /></a>
                        <a href="#slide2" className="btn btn-circle bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowRight className="size-5 text-white" /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-full max-h-[500px] rounded-md" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-4 bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowLeft className="size-5 text-white" /></a>
                        <a href="#slide3" className="btn btn-circle bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowRight className="size-5 text-white" /></a>
                    </div>
                    <div className="absolute flex md:p-20 p-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white space-y-7 md:w-2/5">
                            <h2 className="md:text-5xl lg:text-5xl text-2xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="lg:flex lg:gap-5 hidden lg:block">
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#FF3811] hover:border-none">Discover More</button>
                                <button className="btn text-white bg-transparent hover:bg-[#FF3811] hover:border-none">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-full max-h-[500px] rounded-md" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-4 bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowLeft className="size-5 text-white" /></a>
                        <a href="#slide3" className="btn btn-circle bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowRight className="size-5 text-white" /></a>
                    </div>
                    <div className="absolute flex md:p-20 p-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white space-y-7 md:w-2/5">
                            <h2 className="md:text-5xl lg:text-5xl text-2xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="lg:flex lg:gap-5 hidden lg:block">
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#FF3811] hover:border-none">Discover More</button>
                                <button className="btn text-white bg-transparent hover:bg-[#FF3811] hover:border-none">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-full max-h-[500px] rounded-md" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-4 bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowLeft className="size-5 text-white" /></a>
                        <a href="#slide3" className="btn btn-circle bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowRight className="size-5 text-white" /></a>
                    </div>
                    <div className="absolute flex md:p-20 p-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white space-y-7 md:w-2/5">
                            <h2 className="md:text-5xl lg:text-5xl text-2xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="lg:flex lg:gap-5 hidden lg:block">
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#FF3811] border-none">Discover More</button>
                                <button className="btn text-white bg-transparent hover:bg-[#FF3811] hover:border-none">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img4} className="w-full h-full max-h-[500px] rounded-md" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-4 bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowLeft className="size-5 text-white" /></a>
                        <a href="#slide3" className="btn btn-circle bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowRight className="size-5 text-white" /></a>
                    </div>
                    <div className="absolute flex md:p-20 p-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white space-y-7 md:w-2/5">
                            <h2 className="md:text-5xl lg:text-5xl text-2xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="lg:flex lg:gap-5 hidden lg:block">
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#FF3811] hover:border-none">Discover More</button>
                                <button className="btn text-white bg-transparent hover:bg-[#FF3811] hover:border-none">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full h-full max-h-[500px] rounded-md" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-4 bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowLeft className="size-5 text-white" /></a>
                        <a href="#slide3" className="btn btn-circle bg-gray-950 bg-opacity-55 border-none hover:bg-[#FF3811]"><FaArrowRight className="size-5 text-white" /></a>
                    </div>
                    <div className="absolute flex md:p-20 p-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white space-y-7 md:w-2/5">
                            <h2 className="md:text-5xl lg:text-5xl text-2xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="lg:flex lg:gap-5 hidden lg:block">
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#FF3811] hover:border-none">Discover More</button>
                                <button className="btn text-white bg-transparent hover:bg-[#FF3811] hover:border-none">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;