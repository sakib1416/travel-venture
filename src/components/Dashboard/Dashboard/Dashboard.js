import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Dashboard = () => {
    const [authorization, setAuthorization] = useState({});
    const {user, admin} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [isAdmin, setIsAdmin] = admin;
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
            setIsAdmin(loggedInUser.email);
        }
    })
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center mt-5 pt-5">This is your dashboard</h1>
            <Link className="text-center mt-5" to="/orders"><h4>See Orders</h4></Link>
            {
                isAdmin.length  && <div className="text-center">
                <Link to="/addService"><h4>Add Service</h4></Link>
                <Link to="/addReview"><h4>Add Review</h4></Link>
                <Link to="/addAdmin"><h4>Add Admin</h4></Link>
            </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;