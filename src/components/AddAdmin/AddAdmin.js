import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        data.posted = new Date();
        console.log("admin clicked ", data);
        fetch("http://localhost:5000/addAdmin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(admins => {
            if(admins) {
                alert("Admin Added");
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1>Add a admin</h1>
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group m-1">
                            <input type="text" name="name" placeholder="Admin Name" className="form-control" {...register('name', { required: true })} />
                            {errors.name && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="form-group m-2">
                            <input type="text" name="email" placeholder="Admin Email" className="form-control" {...register('email', { required: true })} />
                            {errors.email && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="form-group mt-3 text-right">
                            <button type="submit" className="btn btn-secondary">Add Admin</button>
                        </div>
                    </form>
        </div>
    );
};

export default AddAdmin;