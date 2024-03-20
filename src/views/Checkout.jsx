import { useContext, useState } from 'react';
import Receipt from '../components/Receipt/Receipt';
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
                        <div className='checkout-btn-container'>
                            <button onClick={toggleReceipt} className='place-order-btn'>Place Order</button>
                            <button onClick={ctx.emptyCart} className='empty-checkout-btn'>Empty cart</button>
                        </div>
                    </>
                )}
            </div>
            {showReceipt && <Receipt />}
        </div>
    );
}
