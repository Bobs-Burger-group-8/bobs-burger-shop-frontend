import axios from 'axios';
import { useEffect, useState } from 'react'
import './Profile.css'
import { getAllProducts } from '../../services/ProductService';
import OrderList from '../OrderList/OrderList';

const BASE_API_URL = 'https://localhost:7141/';

function OrderHistory({ id, user }) {
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    async function getOrders() {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
          };
        await axios.get(BASE_API_URL + "orders", config)
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
    <OrderList products={products} orders={orders}/>
  )
}

export default OrderHistory
