import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        console.log("Review clicked ", data);

        fetch("https://stormy-thicket-62666.herokuapp.com/addReviews", {
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
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1>Add Review in this page</h1>
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group m-1">
                            <input type="text" name="name" placeholder="Your Name" className="form-control" {...register('name', { required: true })} />
                            {errors.name && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="form-group m-2">
                            <input type="text" name="country" placeholder="Your country" className="form-control" {...register('country', { required: true })} />
                            {errors.country && <span className="text-danger">This field is required</span>}

                        </div>
                        <div class="form-group mt-2">
                            <textarea class="form-control" {...register('review', { required: true })} name="review" placeholder="Post your review here" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        {errors.review && <span className="text-danger">This field is required</span>}
                        <div className="form-group mt-3 text-right">
                            <button type="submit" className="btn btn-secondary">Post Review</button>
                        </div>
                    </form>
        </div>
    );
};

export default AddReview;