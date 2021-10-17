import React from 'react';

const MostVisitedCards = ({visited}) => {
    return (
        <div className='col-md-4 col-sm-6'>
            <div class="card" style={{width: '18rem'}}>
                <img src={visited.image} class="card-img-top" alt="..."/>
                <h6 class="card-subtitle mt-2 text-muted">{visited.place}</h6>
                <div class="card-body">
                    <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                </div>
            </div>
        </div>
    );
};

export default MostVisitedCards;