import { useContext, useState } from "react"
import { AppCtx } from "../../App"

export default function Total(){
    const ctx = useContext(AppCtx);
    let sum = 0.00;
    if(ctx.cart.length>0){

        for(let i =0; i<ctx.cart.length; i++){
            sum = sum + (Number.parseFloat(ctx.cart[i].price)*ctx.cart[i].in_cart)
            
        console.log(sum)
    }
    
    }
    return(
        
      <div className="total-section">
      <div>
        <h3>Total</h3>
        <hr />
      </div>

      <div>
        <p className="">£{sum.toFixed(2)|0.00}</p>
      </div>
      
    </div>
    )
}