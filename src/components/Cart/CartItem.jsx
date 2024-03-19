import { useContext, useState } from "react"
import { AppCtx } from "../../App"

export default function CartItem({item}){
    const ctx = useContext(AppCtx)
    const [cartItem, setItem] = useState(item)
    
    function increase(){
        let updatedItem = cartItem;
        updatedItem.in_cart++ ;
        setItem(updatedItem);
        let cart = ctx.cart.map((element) => element.id !=cartItem? element: cartItem)
        ctx.updateCart(cart)
    }
    function decrease(){
        let updatedItem = cartItem;
        updatedItem.in_cart-- ;
        setItem(updatedItem);
        let cart = ctx.cart.map((element) => element.id !=cartItem? element: cartItem)
        ctx.updateCart(cart)
    }
    if(cartItem.in_cart <= 0 && cartItem.id!=undefined){
        let cart = ctx.cart.filter(element => element.id!==cartItem.id)
       ctx.updateCart(cart)
    }

    return(<><li>
        <img
          className="cart--item-icon"
          src=""
          alt="productimg"
        />
        <p>{cartItem.name}</p>
        <button className="quantity-btn remove-btn center" onClick={decrease}>-</button>
        <span className="quantity-text center">{cartItem.in_cart}</span>
        <button className="quantity-btn add-btn center" onClick={increase}>+</button>
      </li></>)
}