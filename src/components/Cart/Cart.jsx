import React, { useContext } from 'react'
import CartItemList from './CartItemList'
import Total from './Total'
import './Cart.css'
import { AppCtx } from '../../App'

function Cart({refreshPage}) {
    let ctx = useContext(AppCtx)
  return (
    <>
        <CartItemList refreshPage={refreshPage}/>
        <Total />
        <button onClick={ctx.emptyCart}>Empty cart</button>
    </>
  )
}

export default Cart