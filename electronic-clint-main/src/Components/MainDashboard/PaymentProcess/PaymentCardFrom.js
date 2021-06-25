import React, { useState } from "react";
import swal from 'sweetalert';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentCardForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
      swal("thank You!", "Payment success")
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button className="btn btn-success mt-3" type="submit" disabled={!stripe}>
          Payment Now
        </button>
      </form>
      {
        paymentError && <h4 style={{ color: 'red' }}>{paymentError}</h4>
      }
    </div>
  );
};

export default PaymentCardForm;