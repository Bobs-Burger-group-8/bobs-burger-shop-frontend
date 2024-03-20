import { useContext } from "react";
import { AppCtx } from "../../App";

export default function ReceiptItem({ item }) {
    const ctx = useContext(AppCtx);

    return (
        <li>
            <p>{item.name}</p>
            <span className="quantity-text center">{item.in_cart}</span>
        </li>
    );
}
