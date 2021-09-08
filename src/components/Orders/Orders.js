import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrdersCards from '../OrdersCards/OrdersCards';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Orders = () => {
    const {user, admin} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/orders", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
    })
    .then(response => response.json())
    .then(order => {
        console.log(order);
        setOrders(order);
    })
    }, [loggedInUser.email])
    return (
        <div>
            <Navbar></Navbar>
            <div className="m-5 p-5 text-center">
                <h1>You Orders: </h1>
                {
                    orders.map(order => <OrdersCards order={order}></OrdersCards>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Orders;