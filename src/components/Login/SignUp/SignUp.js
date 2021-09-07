import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import schema from './schema';
import { handlePasswordSignUp } from '../LoginManager';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { useHistory } from 'react-router';


// firebase.initializeApp(firebaseConfig);

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
}

const SignUp = () => {
    const history = useHistory();
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)});
    const submitForm = (data) => {
        const name = `${data.firstName} ${data.lastName}`;
        //console.log(name, data.email, data.password);
        handlePasswordSignUp(name, data.email, data.password)
        .then(response => {
            //console.log(response);
            history.push("/");
        })
    }
    return (
        <div className="text-center">
            <Navbar></Navbar>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div class="form-group">
                    <label for="exampleInputFirstName">First Name</label>
                    <input type="text" class="form-control" name="firstName" {...register("firstName")} placeholder="First Name"/>
                    <p>{errors.firstName ?.message}</p>
                </div>
                <div class="form-group">
                    <label for="exampleInputLastName">Last Name</label>
                    <input type="text" class="form-control" name="lastName" {...register("lastName")} placeholder="Last Name"/>
                    <p>{errors.lastName ?.message}</p>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" name="email" {...register("email")} placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    <p>{errors.email ?.message}</p>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" name="password" {...register("password")} placeholder="Password"/>
                    <p>{errors.password ?.message}</p>
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

export default SignUp;