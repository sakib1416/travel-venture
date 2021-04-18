import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './Navbar.css';
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
        </div>
    );
};

export default Navbar;