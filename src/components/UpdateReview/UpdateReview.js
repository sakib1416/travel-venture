import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";

const UpdateReview = () => {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const [reviewData, setReviewData] = useState({});
    //getting the review id
    const {id} = useParams();
    //fetching the review and setting the data using useState
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/review/"+id)
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
        fetch("https://floating-coast-84242.herokuapp.com/update/review/"+id, {
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(mainReview)
        })
        .then(response => response.json())
        .then(result => console.log("Updated finally"));
    }
    const onSubmit = data => {
        const mainReview = {
            name: data.name,
            country: data.country,
            review: data.review
        }
        //fetching with the PATCH method
        fetch("https://floating-coast-84242.herokuapp.com/update/review/"+id, {
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(mainReview)
        })
        .then(response => response.json())
        .then(result => {
            alert("Updated Review");
            history.push("/reviews");
        });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 mb-5">
                <h1>Review Update page</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                Review: 
                <input type="text" defaultValue={reviewData.review} {...register('review')} id="review"/>
                <br />
                <input type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateReview;