import { useContext, useState } from 'react';
import Receipt from '../components/Receipt/Receipt';
import ReceiptItemList from '../components/Receipt/ReceiptItemList';
import CartItemList from '../components/Cart/CartItemList';
import Total from '../components/Cart/Total';
import { AppCtx } from '../App';

export default function Checkout() {
    const [showReceipt, setShowReceipt] = useState(false);
    let ctx = useContext(AppCtx)

    const toggleReceipt = () => {
        setShowReceipt(!showReceipt);
    };

    return (
        <div>
            <div>
                {!showReceipt && (
                    <>
                        <CartItemList />
                        <Total />
                        <button onClick={toggleReceipt}>Place Order</button>
                        <button onClick={ctx.emptyCart}>Empty cart</button>
                    </>
                )}
            </div>
            {showReceipt && <Receipt />}
        </div>
    );
}
