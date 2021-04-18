import React from 'react';

const OrdersCards = ({order}) => {
    return (
        <div>
            <h4>Package Name: {order.product.packageName}</h4>
        </div>
    );
};

export default OrdersCards;