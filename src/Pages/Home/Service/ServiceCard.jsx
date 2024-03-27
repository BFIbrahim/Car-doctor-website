import { FaArrowRight } from "react-icons/fa";

const serviceCard = ({ service }) => {

    const {title, img, price} = service;

    return (
        <div>
            <div className="card w-80 h-96 bg-base-100 border border-gray-300 p-5">
                <figure><img className="h-96" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-[#FF3811] font-semibold"> Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="text-[#FF3811] hover:bg-[#FF3811] btn bg-transparent border-none hover:rounded-full hover:text-white"><FaArrowRight/></button>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default serviceCard;