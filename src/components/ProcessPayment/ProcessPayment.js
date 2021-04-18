import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import React from 'react';
import SimpleCardPayment from './SimpleCardPayment';



const stripePromise = loadStripe('pk_test_51IeMtUBTQ00YLvFcgrEUemOGbtihZp2ih2xqUiKemVUwIRCx2alkOKoQ3PuYvtoU51iVQpH8NWsYMx9BLsZHp1LH00sMHenBZ9');

const ProcessPayment = ({handlePayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                {/* called the SimpleCardPayment component and passed the props again to get the payment id */}
                <SimpleCardPayment handlePayment = {handlePayment}></SimpleCardPayment>
                {/* <SplitCardForm></SplitCardForm> */}
            </Elements>
        </div>
    );
};

export default ProcessPayment;