import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const UserReviewCards = ({review}) => {
    const history = useHistory();
    const deleteReview = (id) => {
        console.log("Delete clicked ", id);
        //fetching with delete method
        fetch("https://floating-coast-84242.herokuapp.com/delete/review/"+id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            console.log("Review Deleted");
            history.push("/dashboard")
        })
    }
    return (
        <div>
            <h5>{review.review}</h5>
            <div>
                            <Link to={"/review/update/"+review._id} className="btn btn-success">Update Review</Link>
                            <br />
                            <button onClick={()=>{deleteReview(review._id)}} className="btn btn-danger mt-1">Delete Review</button>
            </div>
        </div>
    );
};

export default UserReviewCards;