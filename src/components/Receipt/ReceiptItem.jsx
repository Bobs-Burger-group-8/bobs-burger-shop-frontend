import { useContext } from "react";
import { AppCtx } from "../../App";
import './Receipt.css'

export default function ReceiptItem({ item }) {
    const ctx = useContext(AppCtx);

    return (
        <li>
            <img src={item.image} alt="item-image" className="receipt-item-image"/>
            <p>{item.name}</p>
            <span className="quantity-text center">{item.in_cart}</span>
        </li>
    );
}
