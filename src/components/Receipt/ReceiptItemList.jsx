import ReceiptItem from "./ReceiptItem";
import { useContext } from "react";
import { AppCtx } from "../../App";

export default function ReceiptItemList() {
    const ctx = useContext(AppCtx);

    return (
        <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
                {ctx.cart.map((item, index) => (
                    <ReceiptItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
}
