import CartItem from "./CartItem"
import { AppCtx } from "../../App"
import { useContext } from "react"

export default function CartItemList(){
 
const ctx = useContext(AppCtx)
    return(
        <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
                { ctx.cart.map((item, index)=>(<CartItem key={index} id={item.id} item={item}/>))
                }
            </ul>
        </div>
    )
}