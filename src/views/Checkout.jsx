import { useContext, useState } from 'react';
import Receipt from '../components/Receipt/Receipt';
import CartItemList from '../components/Cart/CartItemList';
import Total from '../components/Cart/Total';
import { AppCtx } from '../App';
import { addOrder } from '../services/OrderService';

export default function Checkout() {
    const [showReceipt, setShowReceipt] = useState(false);
    let ctx = useContext(AppCtx)

    const toggleReceipt = async () => {
        let total = 0;
        const orderProducts = []

        ctx.cart.forEach(item => {
            total += (item.price * item.in_cart);
            orderProducts.push({productId: item.id, quantity: item.in_cart})
        });
    
        const order = {
            userId: localStorage.getItem("userId"),
            products: orderProducts,
            total: total.toFixed(2)
        };
    
        try {
            await addOrder(order);
            setShowReceipt(!showReceipt);
        } catch (error) {
            console.error("Error placing order:", error);
        }
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
