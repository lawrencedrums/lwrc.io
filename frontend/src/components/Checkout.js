import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51IKuryF3m9OLgSX0uMv3hp56aXf0wrTH7OO8xubO0Z3wTSNmZEGeKtrRyMm8lVjt4Js41dG36Egrs5O4VZzqtKte00Yb8Il71G"
  );

  const handleClick = async () => {
    const stripe = await stripePromise;
    const response = await axios.post(
      "http://0.0.0.0:8000/create-checkout-session/",
      {
        id: [1, 3],
      }
    );

    const session = await response.data;

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <div>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
        <button
          type="button"
          id="checkout-button"
          role="link"
          onClick={handleClick}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
