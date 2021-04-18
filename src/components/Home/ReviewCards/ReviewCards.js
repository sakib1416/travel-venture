import React from 'react';

const ReviewCards = ({reviewer}) => {
    return (
        <div className='col-md-4'>
            <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">{reviewer.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{reviewer.country}</h6>
                    <p class="card-text">{reviewer.review}</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
    );
};

export default ReviewCards;