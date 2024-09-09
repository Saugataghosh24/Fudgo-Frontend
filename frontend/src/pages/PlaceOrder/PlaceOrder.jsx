import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const{getTotalCartAmount}= useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Address</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
        </div>
        <input type="email" placeholder="Email Address"/>
        <input type="text" placeholder="Phone no."/>
        <div className="multi-fields">
          <input type="text" placeholder="Street"/>
          <input type="text" placeholder="City"/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="State"/>
          <input type="text" placeholder="Pin Code"/>
        </div>
        <input type="text" placeholder="Land mark" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-detail">
            <p>Subtotal</p>
            <p>&#x20b9;{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-detail">
            <p>Delivery Charges</p>
            <p>&#x20b9;{getTotalCartAmount()===0 ? 0 : 25}</p>
          </div>
          <hr/>
          <div className="cart-total-detail">
            <b>Total</b>
            <b>&#x20b9;{getTotalCartAmount()===0 ? 0 : getTotalCartAmount()+25}</b>
          </div>
          <button>PROCEED TO PAYMENT</button>
      </div>
      </div>
    </form>
  )
}

export default PlaceOrder
