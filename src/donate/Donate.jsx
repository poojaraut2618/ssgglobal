import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';


const Donate = () => {
    const stripePromise = loadStripe("pk_test_51Qp2bI4Q2hkhUg16UjtAtAPPObZRj2PBJgIpIm9KSVi4C6ru5ULNdUWyaymbTC3KtCr6Y7aN5cogknkkpYsFfJvk007Oxtb6j4");

    return (
        <>
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
        </>
    )
}

export default Donate;
