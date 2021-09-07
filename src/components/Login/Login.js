import React, { useContext, useEffect } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import GoogleButton from 'react-google-button';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { handleGoogleSignIn, passwordSignIn } from './LoginManager';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {user, admin} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [isAdmin, setIsAdmin] = admin;
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || { from: {pathname: "/"}};
    const googleSignIn = () => {
        console.log("sign in clicked");
        handleGoogleSignIn()
        .then(response => {
            console.log(response);
            setLoggedInUser(response);
            history.replace(from);
        })
    }
    const submitForm = (data) => {
        //console.log("Login clicked ", data);
        passwordSignIn(data.email, data.password)
        .then(response => {
            console.log(response);
            setLoggedInUser(response);
            history.replace(from);
        })
    }
    return (
        <div className="text-center">
            <Navbar></Navbar>
            
            <div className ="m-5 p-5"> 
                <h1 className="ps-5">This is the login page</h1>
                <div className="mb-3">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" {...register("email")} placeholder="Enter email" required/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" {...register("password")} placeholder="Password" required/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <GoogleButton
                    style ={{marginLeft: '450px'}} onClick={googleSignIn}
                />
                <div>
                <p>Don't have an account? <Link to="/signup">Create a new account</Link></p>
            </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Login;