/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import CartItemList from '../components/Cart/CartItemList'
import '../components/Cart/Cart.css'
import Total from '../components/Cart/Total'
import { AppCtx } from '../App'

function Checkout() {
  let ctx = useContext(AppCtx)
  
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