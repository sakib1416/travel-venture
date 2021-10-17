import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const SimpleCardPayment = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    
    const [paymentError, setPaymentError] = useState();
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
    
        //handling errors and success for payment
        if (error) {
          console.log('[error]', error);
    
          //it will show the dynamic error messages
          setPaymentError(error.message);
    
          //avoid showing both
          setPaymentSuccess(null);
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          setPaymentSuccess(paymentMethod.id);
          setPaymentError(null);
          //payment id then passed to the function which will be stored in the database
          handlePayment(paymentMethod.id)
        }
      };
    return (
        <div>
            <h3>Use strip test payment 424242 and so on</h3>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br/>
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
                {
                    paymentError && <p style = {{color : "red"}}>{paymentError}</p>
                }
                {
                    paymentSuccess && <p style = {{color: "green"}}>Your payment is Successful</p>
                }
            </form>
        </div>
    );
};

export default SimpleCardPayment;