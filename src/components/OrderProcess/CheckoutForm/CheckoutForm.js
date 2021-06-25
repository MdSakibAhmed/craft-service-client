import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm =  ({handleBook}) => {
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (e) => {
        e.preventDefault()
    if(!stripe || !elements){
        return;
    }
    const cardElement = elements.getElement(CardElement)
    const {error,paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card:cardElement
    })
    if(error){
        console.log('[error]', error);
    }
    else{
        console.log('[PaymentMethod]', paymentMethod);
        handleBook()
    }
       
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <CardElement/>

        <input className='btn-primary pr-4 pl-4 border-0 rounded mt-4' type="submit" disabled={!stripe} value="Pay"/>

        </form>
    );
};

export default CheckoutForm;