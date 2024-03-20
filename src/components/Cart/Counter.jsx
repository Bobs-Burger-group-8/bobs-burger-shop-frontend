import { useState } from "react";
import { AppCtx } from "../../App";

export default function Counter(){
    let ctx = useState(AppCtx)

    return(<div><span>{ctx.cart?ctx.cart.length:0}</span></div>)
}