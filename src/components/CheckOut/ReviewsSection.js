import React from 'react';

const ReviewsSection = ({review}) => {
    return (
        <div>
            <h4>"{review.review}"</h4>
            <p>Reviewed By: <span className="important-text">{review.reviewer}</span></p>
        </div>
    );
};

export default ReviewsSection;