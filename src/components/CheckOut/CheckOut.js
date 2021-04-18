import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const CheckOut = () => {
    const {id} = useParams();
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch("https://stormy-thicket-62666.herokuapp.com/service/"+id)
        .then(response => response.json())
        .then(data => setCart(data))
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center mt-3">
                <h1>Welcome to the checkout page!</h1>
                <h3>{cart.packageName}</h3>
                <h5>Package Price: {cart.packagePrice}</h5>
                <Link to={"/shipment/"+cart._id} class="btn btn-primary">Book this package</Link>
            </div>
        </div>
    );
};

export default CheckOut;