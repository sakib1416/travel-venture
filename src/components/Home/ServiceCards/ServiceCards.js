import React from 'react';
import { Link } from 'react-router-dom';
import threeDay from '../../../images/3-day-tour.jpg'
import  './ServiceCards.css'

const ServiceCards = ({service}) => {

    // <div style={{width: '18rem'}}>
    //             <div>
    //                 <h5>{service.packageName}</h5>
    //                 <img src={service.imageURL} style={{width: '100%', height: '50%'}} alt="..."></img>
    //             </div>
    //             <div className="description-card">
    //                 <h6 >{service.packagePrice}</h6>
    //                 <p >{service.packageDescription}</p>
    //                 {/* <a href="#" class="btn btn-primary">See Details</a> */}
    //                 <Link to={"/service/"+service._id} class="btn customButton">See Details</Link>
    //             </div>
    //         </div>
    return (
        <div className="col-md-4 col-sm-6">
            <div class="card">
                    <div class="card-header">
                    <img src={service.imageURL} alt="rover"></img>
                    </div>
                    <div class="card-body">
                    <span class="tag tag-teal mb-2">{service.packagePrice} Package</span>
                    <h4>
                        {service.packageName}
                    </h4>
                    <p>
                        An exploration into the truck's polarising design
                    </p>
                    <Link to={"/service/"+service._id} class="btn customButton">See Details</Link>
                    </div>
                </div>
        </div>
    );
};

export default ServiceCards;