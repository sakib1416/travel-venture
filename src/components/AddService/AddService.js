import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        console.log("Submit clicked ", data);
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1>Add Service in this page</h1>
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group m-1">
                            <input type="text" name="name" placeholder="Your Name" className="form-control" {...register('name', { required: true })} />
                            {errors.name && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="form-group m-1">
                            <input type="text" {...register('phone', { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group m-1">
                            <input type="text" {...register('email', { required: true })} name="email" placeholder="Email" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group row m-1">
                            <div className="col-4">

                                <select className="form-control" name="gender" {...register('gender', { required: true })} >
                                    <option disabled={true} value="Not set">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Not set">Other</option>
                                </select>
                                {errors.gender && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="col-4">
                                <input {...register('age', { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                                {errors.age && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input {...register('weight', { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                                {errors.weight && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>

                        <div className="form-group mt-3 text-right">
                            <button type="submit" className="btn btn-secondary">Send</button>
                        </div>
                    </form>
        </div>
    );
};

export default AddService;