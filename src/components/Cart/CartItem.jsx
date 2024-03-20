import { useContext, useState } from "react"
import { AppCtx } from "../../App"

export default function CartItem({item}){
    const ctx = useContext(AppCtx)
    
    function increase(){
        let updatedItem = item;
        updatedItem.in_cart++ ;
        let cart = ctx.cart.map((element) => element.id !=item.id? element: item)
        ctx.updateCart(cart)
    }
    function decrease(){
        let updatedItem = item;
        updatedItem.in_cart-- ;
        let cart;

        if(updatedItem.in_cart <= 0){
            cart = ctx.cart.filter(element => element.id != item.id)

        }else{
            console.log(item)
            cart = ctx.cart.map((element) => element.id !== item.id? element: item)
            
        }
        
        console.log(cart)
        
        ctx.updateCart(cart)
    }

    return(<><li>
        <img
          className="cart--item-icon"
          src={item.image}
          alt="productimg"
        />
        <p>{item.name}</p>
        <button className="quantity-btn remove-btn center" onClick={decrease}>-</button>
        <span className="quantity-text center">{item.in_cart}</span>
        <button className="quantity-btn add-btn center" onClick={increase}>+</button>
      </li></>)
}