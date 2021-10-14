import React from 'react';
import { Link } from 'react-router-dom';
import threeDay from '../../../images/3-day-tour.jpg'

const ServiceCards = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div class="card" style={{width: '18rem'}}>
                <img src={service.imageURL} style={{width: '100%', height: '50%'}} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{service.packageName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{service.packagePrice}</h6>
                    <p class="card-text">{service.packageDescription}</p>
                    {/* <a href="#" class="btn btn-primary">See Details</a> */}
                    <Link to={"/service/"+service._id} class="btn customButton">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;