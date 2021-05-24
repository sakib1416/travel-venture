import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const CheckOut = () => {
    const history = useHistory();
    //getting the id for the cart/service
    const {id} = useParams();
    const [cart, setCart] = useState([])
    //fetching the single cart/service setting the data using useState
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/service/"+id)
        .then(response => response.json())
        .then(data => setCart(data))
    },[])
    
    const deleteService = (id) => {
        console.log("Delete clicked!! ", id);
        //fetching with delete method
        fetch("https://floating-coast-84242.herokuapp.com/delete/"+id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(serviceDeleted => {
            alert("Deleted Successfully");
            history.push("/");
        })
    }
    const {user, admin} = useContext(UserContext);
    const [isAdmin, setIsAdmin] = admin;
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center m-5 p-5">
                <h1>Welcome to the checkout page!</h1>
                <h3>{cart.packageName}</h3>
                <img src={cart.imageURL} alt="" />
                <h5>Package Price: {cart.packagePrice}</h5>
                <Link to={"/shipment/"+cart._id} class="btn btn-primary">Book this package</Link>
                <br />
                {
                    isAdmin && <div className="mt-2">
                    <Link to={"/service/update/"+cart._id} className="btn btn-success me-2">Update Service</Link>
                    <button onClick={()=>{deleteService(cart._id)}} class="btn btn-danger">Delete this service</button>
                </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CheckOut;