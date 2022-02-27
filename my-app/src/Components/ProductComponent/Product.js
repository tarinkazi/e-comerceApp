import React from "react";
import '../ProductComponent/Product';
import {useStateValue} from "../../Helper/StateProvider";

function Product({id, title, image, price, rating}){
  const [{basket}, dispatch] = useStateValue();
 //console.log("This is the basket>>>",basket)
  const addToBasket =() =>{
    //dispatch the item into the datalayer
    dispatch({
      type:"Add_To_Basket",
      item: {
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    })
  }
  return(
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img className="home_image"             src= {image}
          alt=""
        />

      <button onClick={addToBasket}>Add a Basket</button>

    </div>
  )

}

export default Product;