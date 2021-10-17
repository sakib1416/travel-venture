import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Shipment.css';

const Shipment = () => {
    const history = useHistory();
    const {id} = useParams();
    const [cart, setCart] = useState([]);
    const {user, admin} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [shippingData, setShippingData] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/service/"+id)
        .then(response => response.json())
        .then(data => setCart(data))
    },[])
    const onSubmit = (data) => {
        setShippingData(data);
    }

    const handlePaymentSuccess = (paymentId) => {
        const orderDetails = {
            user: loggedInUser,
            product: cart,
            shipment: shippingData,
            paymentId,
            orderTime: new Date()
        };
        console.log(orderDetails);
        fetch("https://floating-coast-84242.herokuapp.com/addOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderDetails)
        })
        .then(response => response.json())
        .then(purchased => {
            if(purchased) {
                alert("Your order has been successful");
                history.push("/orders");
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 mb-5 pt-5 centered">
            <h1>Check Out Page</h1>
            <h3>Package you are going to buy: <span className="important-text">{cart.packageName}</span></h3>
            <h5>Price: <span className="important-text">{cart.packagePrice}</span></h5>
            <div style = {{display: shippingData ? 'none' : 'block'}} className="col-md-6">
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input name="name" defaultValue={loggedInUser.name} className="form-control" {...register('name', { required: true })} placeholder="Your Name" />
                    {/* {errors.name && <span className="error">Name is required</span>} */}
                </div>
                
                <div className="form-group">
                    <input name="email" defaultValue={loggedInUser.email} className="form-control" {...register('email', { required: true })}  placeholder="Your Email"/>
                    {/* {errors.email && <span className="error">Email is required</span>} */}
                </div>
                
                
                <div className="form-group">
                    <input name="address" {...register('address', { required: true })} className="form-control"  placeholder="Your Address" />
                    {/* {errors.address && <span className="error">Address is required</span>} */}
                </div>
                
                
                <div className="form-group">
                    <input name="phone" {...register('phone', { required: true })} className="form-control" placeholder="Your Phone Number"/>
                    {/* {errors.phone && <span className="error">Phone Number is required</span>} */}
                </div>
                
                <div className="form-group mt-3 text-right">
                    <button type="submit" className="btn btn-secondary">Proceed to payment</button>
                </div>
                
                {/* <input type="submit" /> */}
                </form>
            </div>
            <div style = {{display: shippingData ? 'block' : 'none'}} className="col-md-6">
                <h1>Provide your card details</h1>
                {/* calling the component to make payment and sending the function to get the payment ID */}
                <ProcessPayment handlePayment = {handlePaymentSuccess}></ProcessPayment>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Shipment;