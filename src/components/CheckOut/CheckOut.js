import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const CheckOut = () => {
    //getting the id for the cart/service
    const {id} = useParams();
    const [cart, setCart] = useState([])
    //fetching the single cart/service setting the data using useState
    useEffect(()=>{
        fetch("https://stormy-thicket-62666.herokuapp.com/service/"+id)
        .then(response => response.json())
        .then(data => setCart(data))
    },[])
    
    const deleteService = (id) => {
        console.log("Delete clicked!! ", id);
        //fetching with delete method
        fetch("http://localhost:5000/delete/"+id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(serviceDeleted => alert("Deleted Successfully"))
    }
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
                <div className="mt-2">
                    <Link to={"/service/update/"+cart._id} className="btn btn-success me-2">Update Service</Link>
                    <button onClick={()=>{deleteService(cart._id)}} class="btn btn-danger">Delete this service</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CheckOut;