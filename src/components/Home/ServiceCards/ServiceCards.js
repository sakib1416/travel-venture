import React from 'react';

const ServiceCards = ({service}) => {
    return (
        <div className="col-md-4">
            <div class="card" style={{width: '18rem'}}>
                <img src={service.image} style={{width: '100%', height: '50%'}} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{service.title}</h5>
                    <p class="card-text">{service.description}</p>
                    <a href="#" class="btn btn-primary">See Details</a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;