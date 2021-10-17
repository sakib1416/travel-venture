import React, { useState, useEffect } from 'react';
import threeDay from '../../../images/3-day-tour.jpg';
import ServiceCards from '../ServiceCards/ServiceCards';
import './Services.css'

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/services")
        .then(response => response.json())
        .then(data => setServicesData(data));
    }, [servicesData])
    return (
        <div className="text-center mt-5">
            <h1>Our Services</h1>
            <div className="row mt-3 ms-5">
                {
                    servicesData.map(service => <ServiceCards key={service._id} service={service}></ServiceCards>)
                }
            </div>
        </div>
    );
};

export default Services;