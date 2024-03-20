import { useState } from 'react';
import Receipt from '../components/Receipt/Receipt';
import ReceiptItemList from '../components/Receipt/ReceiptItemList';
import CartItemList from '../components/Cart/CartItemList';
import Total from '../components/Cart/Total';

export default function Checkout() {
    const [showReceipt, setShowReceipt] = useState(false);

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
                    </>
                )}
            </div>
            {showReceipt && <Receipt />}
        </div>
    );
}
