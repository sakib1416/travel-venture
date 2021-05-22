import React, { useState } from 'react';
import threeDay from '../../../images/3-day-tour.jpg';
import ServiceCards from '../ServiceCards/ServiceCards';
import './Services.css'

// const servicesData = [
//     {
//         'title': '3 day tour',
//         'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui excepturi labore maiores nihil corporis, laudantium nemo nisi totam distinctio!',
//         'image': threeDay
//     },
//     {
//         'title': '7 day tour',
//         'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui excepturi labore maiores nihil corporis, laudantium nemo nisi totam distinctio!',
//         'image': threeDay
//     },
//     {
//         'title': '1 month tour',
//         'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui excepturi labore maiores nihil corporis, laudantium nemo nisi totam distinctio!',
//         'image': threeDay
//     }
// ]



const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    fetch("https://floating-coast-84242.herokuapp.com/services")
    .then(response => response.json())
    .then(data => setServicesData(data));
    return (
        <div className="text-center mt-5">
            <h1>Our Services</h1>
            <div className="row mt-3 cards">
                {
                    servicesData.map(service => <ServiceCards service={service}></ServiceCards>)
                }
            </div>
        </div>
    );
};

export default Services;