import React from "react";
import './Checkout.css';
import Subtotal from "../SubtotalComponents/Subtotal";
import {useStateValue} from '../../Helper/StateProvider';
import CheckoutProduct from "./ChectoutProduct";
function Checkout(){
  const [{basket,user }, dispatch] = useStateValue();
  return(
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout__ad" src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt =""
        />

        <div>
          <h3>Hello, {user?user.email:"Guest"}</h3>
          <h2 className='checkout__title'>Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* Basket */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
     
    </div>
  )
}

export default Checkout;