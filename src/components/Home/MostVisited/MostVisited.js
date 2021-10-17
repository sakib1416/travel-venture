import React from 'react';
import colonge from '../../../images/colonge.jpg';
import MostVisitedCards from '../MostVisitedCards/MostVisitedCards';
const mostVisited = [
    {
        'place': 'Remote Island',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, enim!',
        'image': colonge
    },
    {
        'place': 'Remote Island',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, enim!',
        'image': colonge
    },
    {
        'place': 'Remote Island',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, enim!',
        'image': colonge
    }
]

const MostVisited = () => {
    return (
        <div className='text-center mt-5'>
            <h1>Most Visited Places</h1>
            <div className="row cards mt-3">
                {
                    mostVisited.map(visited => <MostVisitedCards visited={visited}></MostVisitedCards>)
                }
            </div>
        </div>
    );
};

export default MostVisited;