import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import { getAllProducts } from '../../services/ProductService';
import { AppCtx } from '../../App';

const BASE_API_URL = 'https://localhost:7141/';

function OrderHistory({ id, user }) {
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
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

    console.log(products)

  return (
    <ul className='history'>
        {orders.map((order, index) => (
            <li key={index} className='history--order'>
                <h3>Order number: {index+1}</h3>
                {order.productIds.map((product, j) => (
                    <div key={j} className='history--item'>
                        <p>{products.find(prod => prod.id === product).name}</p>
                        <p>{products.find(prod => prod.id === product).price}</p>
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
