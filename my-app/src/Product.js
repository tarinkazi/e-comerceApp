import React from "react";
import './Product.css';

function Product(){

  return(
    <div className="product">
      <div className="product_info">
        <p>The lean Startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>199.99</strong>
        </p>
        <div className="product_rating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>

        </div>
      </div>
      <img className="home_image"             src='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
          alt=""
        />

      <button>Add a Basket</button>

    </div>
  )

}

export default Product;