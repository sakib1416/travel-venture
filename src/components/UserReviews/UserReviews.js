import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import UserReviewCards from './UserReviewCards';

const UserReviews = () => {
    const {user} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [fetchedReviews, setFetchedReviews] = useState([]);
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/user/reviews", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(response => response.json())
        .then(reviews => {
            setFetchedReviews(reviews);
        })

    }, [loggedInUser.email])
    return (
        <div>
            <Navbar></Navbar>
            <h1>Your reviews are here!</h1>
            {
                fetchedReviews.map(review => <UserReviewCards review = {review}></UserReviewCards>)
            }
            <Footer></Footer>
        </div>
    );
};

export default UserReviews;