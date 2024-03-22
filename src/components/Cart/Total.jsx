import { useContext } from "react"
import { AppCtx } from "../../App"

export default function Total(){
    const ctx = useContext(AppCtx);
    let sum = 0.00;
    if(ctx.cart.length>0){

        for(let i =0; i<ctx.cart.length; i++){
            sum = sum + (Number.parseFloat(ctx.cart[i].price)*ctx.cart[i].in_cart)
            
        }
    
    }

    return(
        
      <div className="total-section">
          <h4>Total: £<input className="total" type="number" value={sum.toFixed(2)||0.00} disabled/></h4>
      </div>
    )
}