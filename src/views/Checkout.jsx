import { useContext, useState } from 'react';
import Receipt from '../components/Receipt/Receipt';
import CartItemList from '../components/Cart/CartItemList';
import Total from '../components/Cart/Total';
import { AppCtx } from '../App';
import { addOrder } from '../services/OrderService';
import Favourites from './Favourites';
import CardList from '../components/Cards/CardList';
import '../App.css'
import '../components/Cart/Cart.css'

export default function Checkout() {
    const [showReceipt, setShowReceipt] = useState(false);
    const [cart, setCart] = useState([])
    let ctx = useContext(AppCtx)

    const toggleReceipt = async () => {

        ctx.setReceipt(ctx.cart)

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

       ctx.emptyCart()
    };
    

    return (
        <div className="checkout-container">
            <div className="cart-summary">
                {!showReceipt && (
                    <>
                        <CartItemList />
                        <div className='checkout-btn-container'>
                            <button onClick={toggleReceipt} className='place-order-btn'>Place Order</button>
                            <button onClick={ctx.emptyCart} className='empty-checkout-btn'>Empty cart</button>
                        </div>
                        <br></br>
                        <h2>Did you forget something?</h2>
                        <div className="product-list-container">
                        <CardList products={ctx.products.filter(item=>item.category=="drink")} updateCart={(input)=>setCart([...cart,input ])}/>    
                        </div>
                    </>
                )}
            </div>
            {showReceipt && <Receipt />}
        </div>
    );
}
