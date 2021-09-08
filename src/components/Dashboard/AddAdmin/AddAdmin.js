import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { handlePasswordSignUp } from '../../Login/LoginManager';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const AddAdmin = () => {
    const [checkAdmin, setCheckAdmin] = useState({});
    const history = useHistory();
    const {register, handleSubmit, formState:{errors}} = useForm();
    const submitForm = (data) => {
        console.log(data);
        const name = `${data.firstName} ${data.lastName}`;
        handlePasswordSignUp(name, data.email, data.password)
        .then(response => {
            response.isAdmin = true;
            const {displayName, email, isAdmin} = response;
            const realUser = {displayName, email, isAdmin};
            console.log(realUser);
            setCheckAdmin(realUser);
            history.push("/");
        })
    }
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/addAdmin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkAdmin)
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    }, [checkAdmin])
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleSubmit(submitForm)}>
                <div class="form-group">
                    <label for="exampleInputFirstName">First Name</label>
                    <input type="text" class="form-control" name="firstName" {...register("firstName")} placeholder="First Name"/>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputLastName">Last Name</label>
                    <input type="text" class="form-control" name="lastName" {...register("lastName")} placeholder="Last Name"/>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" name="email" {...register("email")} placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" name="password" {...register("password")} placeholder="Password"/>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputConfirmPassword1">Confirm Password</label>
                    <input type="password" class="form-control" name="confirmPassword" {...register("confirmPassword")} placeholder="Confirm Password"/>
                    <p>{errors.confirmPassword && "Password must match"}</p>
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddAdmin;