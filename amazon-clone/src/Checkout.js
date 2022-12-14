import React from 'react'
import checkout_ad from "./images/banner.jpg";
import "./Checkout.css";
import Subtotal from './Subtotal.js';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';




function Checkout() {
    const[{basket,dispatch}]=useStateValue();
  return (
    <div className="checkout">
        <div className="checkout_left">
        <img
            className="checkout_ad"
            src={checkout_ad}
            alt=" "
        />
        
        <div>
            <h2 className="checkout_title">
            Your Shopping Basket
            </h2>
            {basket.map(item=>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                />
            ))}

        </div>
    </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;