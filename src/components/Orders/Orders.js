import React, { useState } from 'react';
import OrdersCards from '../OrdersCards/OrdersCards';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    fetch("https://stormy-thicket-62666.herokuapp.com/orders")
    .then(response => response.json())
    .then(data => setOrders(data));
    return (
        <div>
            <h1>Showing all the orders</h1>
            {
                orders.map(order => <OrdersCards order={order}></OrdersCards>)
            }
        </div>
    );
};

export default Orders;