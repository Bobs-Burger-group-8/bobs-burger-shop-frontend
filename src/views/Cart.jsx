/* eslint-disable no-unused-vars */
import React from 'react'
import CartItemList from '../components/Cart/CartItemList'
import '../components/Cart/Cart.css'
import Total from '../components/Cart/Total'

function Cart() {
  return (<>

    <div id="cart" className='container'><h2>Cart</h2>
    <CartItemList/>
    <Total/>
    </div></>
  )
}

export default Cart