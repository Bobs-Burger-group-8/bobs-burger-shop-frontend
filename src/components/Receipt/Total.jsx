import { useContext } from "react"
import { AppCtx } from "../../App"

export default function ReceiptTotal(){
    const ctx = useContext(AppCtx);
    let sum = 0.00;
    if(ctx.receipt.length>0){

        for(let i =0; i<ctx.receipt.length; i++){
            sum = sum + (Number.parseFloat(ctx.receipt[i].price)*ctx.receipt[i].in_cart)
            
        }
    
    }

    return(
        
      <div className="total-section">
      <div>
        <h3>Total</h3>
        <hr />
      </div>

      <div>
        £<input className="total" type="number" value={sum.toFixed(2)||0.00} disabled/>
      </div>
      <hr />
      
    </div>
    )
}