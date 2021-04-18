import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        data.created = new Date();
        //console.log("Add package clicked ", data);
        fetch("https://stormy-thicket-62666.herokuapp.com/addService", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(services => {
            console.log(services);
            if(services){
                alert("Service added successfully");
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1>Add Service in this page</h1>
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group m-1">
                            <input type="text" name="packageName" placeholder="Package Name" className="form-control" {...register('packageName', { required: true })} />
                            {errors.packageName && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="form-group m-1">
                            <input type="text" {...register('packagePrice', { required: true })} name="packagePrice" placeholder="Package Price" className="form-control" />
                            {errors.packagePrice && <span className="text-danger">This field is required</span>}
                        </div>
                        <div class="form-group mt-2">
                            <textarea class="form-control" {...register('packageDescription', { required: true })} name="packageDescription" placeholder="Package Description" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        {errors.packageDescription && <span className="text-danger">This field is required</span>}

                        <div className="form-group mt-3 text-right">
                            <button type="submit" className="btn btn-secondary">Add Package</button>
                        </div>
                    </form>
        </div>
    );
};

export default AddService;