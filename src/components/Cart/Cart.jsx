import React from 'react'
import CartItemList from './CartItemList'
import Total from './Total'
import './Cart.css'

function Cart() {
  return (
    <>
        <CartItemList />
        <Total />
    </>
  )
}

export default Cart