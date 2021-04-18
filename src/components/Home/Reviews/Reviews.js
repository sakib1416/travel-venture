import React, { useEffect, useState } from 'react';
import ReviewCards from '../ReviewCards/ReviewCards';
// const reviewers = [
//     {
//         'name': 'John Reese',
//         'place': 'New York'
//     },
//     {
//         'name': 'Root Shaw',
//         'place': 'Hells Kitchen'
//     },
//     {
//         'name': 'Carter Dominar',
//         'place': 'Gotham City'
//     }
// ]




const Reviews = () => {
    const [reviewers, setReviewers] = useState([]);

    fetch('https://stormy-thicket-62666.herokuapp.com/reviews')
    .then(response => response.json())
    .then(data=> setReviewers(data));
    return (
        <div className="text-center mt-5">
            <h1>This is review section dynamic</h1>
            <div className="row mt-3 cards">
                {
                    reviewers.map(reviewer => <ReviewCards reviewer={reviewer}></ReviewCards>)
                }
            </div>
        </div>
    );
};

export default Reviews;