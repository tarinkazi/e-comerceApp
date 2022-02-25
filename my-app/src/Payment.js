import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./ChectoutProduct";
import Checkout from "./Checkout";
import { Link, Navigate } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from './reducer';
import axios from './axios.js'
import {useNavigate } from "react-router-dom";

function Payment(){
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState("null");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setdisabled] = useState(true);
  const [clientSecret, setclientSecret] = useState(true);


  const handleChange = (e) => {
    setdisabled(e.empty);
   // setError(e.error ? e.error.message : "");
  };

  const handleSubmit =async (e) => {
      e.preventDefault();
     // setProcessing(true);
      // const payload = await stripe.confirmCardPayment(clientSecret, {
      //   payment_method: {
      //     card: elements.getElement(CardElement)
      //   }
      //  })
      //  .then(({patmentIntent}) =>{
      //   setSucceeded(true)
      //   setError(null)
      //   setProcessing(false)
      //   ///////////
      //   navigate('/');
      }
 
  return(
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
                <h3>Delivery add</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 bahadur pur</p>
            <p>Toronto</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
              <h3>payment__method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__pricecontainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket.length} items):{" "}
                        <strong>{value}</strong>
                      </p>
                      
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing? <p> Processing</p>:"Buy Now"}</span>
                </button>

              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  

  )
}

export default Payment;