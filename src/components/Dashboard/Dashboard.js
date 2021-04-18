import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Footer from '../Shared/Footer/Footer';

const Dashboard = () => {
    const [authorization, setAuthorization] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch("https://stormy-thicket-62666.herokuapp.com/isAdmin", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: loggedInUser.email})
    })
    .then(response => response.json())
    .then(admin => {
        console.log(admin);
        if(admin){
            setAuthorization(loggedInUser.email);
        }
    })
    },[])
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navbar-bg">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="/"></a> */}
                    <Link class="navbar-brand" to='/'>Travel Venture</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nav-links" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        {/* <a class="nav-link" href="/">Home</a> */}
                            <Link class="nav-link" to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/'>Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/contact'>Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/dashboard'>Dashboard</Link>
                        </li>
                        <li class="nav-item">
                                <Link class="nav-link" to='/addService'>Add Service</Link>
                        </li>
                        <li class="nav-item">
                                <Link class="nav-link" to='/addReview'>Add Review</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/orders'>Orders</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/login'>Login</Link>
                        </li>
                        {
                            loggedInUser.email && <li class="nav-item">
                            <Link class="nav-link" to='/login'>{loggedInUser.name}</Link>
                            </li>  
                        }
                    </ul>
                    </div>
                </div>
            </nav>
            <h1 className="text-center m-5 p-5">This is auch dashboard</h1>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;