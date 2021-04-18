import React, { useState } from 'react';
import OrdersCards from '../OrdersCards/OrdersCards';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    fetch("https://stormy-thicket-62666.herokuapp.com/orders")
    .then(response => response.json())
    .then(data => setOrders(data));
    return (
        <div>
            <Navbar></Navbar>
            <div className="m-5 p-5 text-center">
                <h1>Showing all the orders</h1>
                {
                    orders.map(order => <OrdersCards order={order}></OrdersCards>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Orders;