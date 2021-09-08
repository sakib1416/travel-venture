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
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center mt-3 pt-3">This is your dashboard</h1>
            <Link className="text-center mt-5" to="/orders"><h4>See Orders</h4></Link>
            {
                isAdmin.isAdmin  && <div className="text-center pb-3">
                <Link to="/addService"><h4>Add Service</h4></Link>
                <Link to="/addReview"><h4>Add Review</h4></Link>
                {/* <Link to="/addAdmin"><h4>Add Admin</h4></Link> */}
            </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;