import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const UpdateReview = () => {
    const [reviewData, setReviewData] = useState({});
    //getting the review id
    const {id} = useParams();
    //fetching the review and setting the data using useState
    useEffect(()=>{
        fetch("http://localhost:5000/review/"+id)
        .then(response => response.json())
        .then(data => setReviewData(data))
    }, [])
    const updateReview = () => {
        //getting values from the input field
        const name = document.getElementById("name").value;
        const country = document.getElementById("country").value;
        const review = document.getElementById("review").value;
        //putting them together in a object
        const mainReview = {name, country, review};
        //fetching with the PATCH method
        fetch("http://localhost:5000/update/review/"+id, {
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(mainReview)
        })
        .then(response => response.json())
        .then(result => console.log("Updated finally"));
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 mb-5">
                <h1>Review Update page</h1>
                Name: 
                <input type="text" placeholder={reviewData.name} id="name"/>
                <br />
                Country: 
                <input type="text" placeholder={reviewData.country} id="country"/>
                <br />
                Review: 
                <input type="text" placeholder={reviewData.review} id="review"/>
                <br />
                <button onClick={updateReview}>Submit</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateReview;