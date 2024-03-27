import { useEffect, useState } from "react";
import ServiceCard from './ServiceCard'

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>
            <div className="md:w-2/4 px-3 mx-auto text-center mb-5">
                <h4 className="text-[#FF3811] font-bold">Service</h4>
                <h1 className="text-4xl font-bold mb-2">Our Service Area</h1>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <button className="btn bg-transparent border-[#FF3811]">More Services</button>

        </div>
    );
};

export default Service;