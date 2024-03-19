import { useContext, useState } from "react"
import { AppCtx } from "../../App"

export default function Total(){
    const ctx = useContext(AppCtx);
    let sum = 0;
    console.log(ctx.cart)
    if(ctx.cart.length>0){
        for(let i =0; i<ctx.cart.length; i++){
            sum+=ctx.cart[i].price;
    }
    
    }

    return(
        
      <div className="total-section">
      <div>
        <h3>Total</h3>
        <hr />
      </div>

      <div>
        <span className="total-number">£{sum|0.00}</span>
      </div>
    </div>
    )
}