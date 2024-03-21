import axios from 'axios';
import { useEffect, useState } from 'react'
import './Profile.css'
import { getAllProducts } from '../../services/ProductService';

const BASE_API_URL = 'https://localhost:7141/';

function OrderHistory({ id, user }) {
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    async function getOrders() {
        await axios.get(BASE_API_URL + "orders")
            .then(res => setOrders(res.data.filter(order => order.userId === id)))
        setProducts(await getAllProducts())
        setLoading(false)
    }

    useEffect(() => {
        getOrders()
    }, [])

    if(loading) {
        return <p>Loading history...</p>
    }

  return (
    <ul className='history'>
        {orders.map((order, index) => (
            <li key={index} className='history--order'>
                <h3>Order number: {index+1}</h3>
                {order.products.reverse().map((product, j) => (
                    <div key={j} className='history--item'>
                        <p>{products.find(prod => prod.id === product.productId).name}</p>
                        <p>x{product.quantity}</p>
                        <p>{products.find(prod => prod.id === product.productId).price}</p>
                    </div>
                ))}
                <div className='history--total'>
                    <h4>Total:</h4>
                    <h4>{order.total}</h4>
                </div>
            </li>
        ))}
    </ul>
  )
}

export default OrderHistory
