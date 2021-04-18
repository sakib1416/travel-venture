import React from 'react';
import threeDay from '../../../images/3-day-tour.jpg'

const ServiceCards = ({service}) => {
    return (
        <div className="col-md-4">
            <div class="card" style={{width: '18rem'}}>
                <img src={threeDay} style={{width: '100%', height: '50%'}} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{service.packageName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{service.packagePrice}</h6>
                    <p class="card-text">{service.packageDescription}</p>
                    <a href="#" class="btn btn-primary">See Details</a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;