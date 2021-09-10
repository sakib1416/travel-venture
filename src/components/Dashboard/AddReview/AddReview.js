import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import Footer from '../../Shared/Footer/Footer';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';

const AddReview = () => {
    const history = useHistory();
    const {id} = useParams();
    const {user, admin} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [reviewedService, setReviewedService] = useState({});
    const { register, handleSubmit, formState: { errors }} = useForm();

    //fetching the service which is going to be reviewed
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/service/"+id)
        .then(response => response.json())
        .then(service => {
            console.log(service);
            setReviewedService(service);
        })
    }, [id])
    const onSubmit = (data) => {
        data.serviceName = reviewedService.packageName;
        data.serviceID = reviewedService._id;
        data.posted = new Date();
        data.reviewerEmail = loggedInUser.email;
        console.log("Review clicked ", data);
        fetch("https://floating-coast-84242.herokuapp.com/addReviews", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(reviews => {
            if(reviews) {
                alert("Review Added");
                history.push("/");
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1>Add Review in this page</h1>
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group m-1">
                            <input type="text" name="reviewer" defaultValue={loggedInUser.name} className="form-control" {...register('reviewer', { required: true })} />
                            {errors.name && <span className="text-danger">This field is required</span>}

                        </div>
                        <div class="form-group mt-2">
                            <textarea class="form-control" {...register('review', { required: true })} name="review" placeholder="Post your review here" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        {errors.review && <span className="text-danger">This field is required</span>}
                        <div className="form-group mt-3 text-right">
                            <button type="submit" className="btn btn-secondary">Post Review</button>
                        </div>
                </form>
                <Footer></Footer>
        </div>
    );
};

export default AddReview;