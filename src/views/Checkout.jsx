/* eslint-disable no-unused-vars */
import React from 'react'
import CartItemList from '../components/Cart/CartItemList'
import '../components/Cart/Cart.css'
import Total from '../components/Cart/Total'

function Checkout() {
  return (
    <>
      <div id="cart" className='container'>
        <h2>Your Bobs bagger:</h2>
        <CartItemList/>
        <Total/>
      </div>
    </>
  )
}

export default Checkout