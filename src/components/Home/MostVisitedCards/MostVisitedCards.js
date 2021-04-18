import React from 'react';

const MostVisitedCards = ({visited}) => {
    return (
        <div className='col-md-4'>
            <div class="card" style={{width: '18rem'}}>
                <img src={visited.image} class="card-img-top" alt="..."/>
                <h6 class="card-subtitle mt-2 text-muted">{visited.place}</h6>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default MostVisitedCards;