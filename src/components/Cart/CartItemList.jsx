import CartItem from "./CartItem"
import { AppCtx } from "../../App"
import { useContext } from "react"
import Total from "./Total"

export default function CartItemList({refreshPage}){
 
const ctx = useContext(AppCtx)
    return(
        <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
                { ctx.cart.map((item, index)=>(<CartItem key={index} id={item.id} item={item} refreshPage={refreshPage}/>))
                }
            </ul>
            <Total></Total>
        </div>
    )
} 