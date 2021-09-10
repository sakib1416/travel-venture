import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import './Navbar.css';
import {handleSignOut} from '../../Login/LoginManager';
import {
    Link,
    useHistory 
  } from "react-router-dom";

const Navbar = () => {
    const history = useHistory()
    const {user, admin} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [isAdmin, setIsAdmin] = admin;
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/isAdmin", {
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
            setIsAdmin(admin);
        }
    })
    },[loggedInUser.email, setIsAdmin])
    const signOut = () => {
        handleSignOut()
        .then(response => {
            setLoggedInUser(response);
            history.push("/");
        })
    }
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
                        {
                            loggedInUser.email ?
                                <div className="row" style={{width: '100%'}}>
                                    <div className="col-md-4">
                                        {
                                            (isAdmin.isAdmin && loggedInUser.email) ? 
                                            <div>
                                                <li class="nav-item">
                                                <Link class="nav-link" to='/dashboard'>Admin Dashboard</Link>
                                                </li>
                                            </div> :
                                            <div>
                                                <li class="nav-item">
                                                <Link class="nav-link" to='/dashboard'>User Dashboard</Link>
                                                </li>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <li class="nav-item">
                                                <Link class="nav-link" onClick={signOut}>Logout</Link>
                                            </li>
                                        </div>
                                    </div>
                                </div> :
                            <li class="nav-item">
                                <Link class="nav-link" to='/login'>Login/Signup</Link>
                            </li>
                        }
                        {/* {
                            (isAdmin.isAdmin && loggedInUser.email) && 
                            <li class="nav-item">
                                <Link class="nav-link" to='/login'>Dashboard Admin</Link>
                            </li>
                        } */}
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;