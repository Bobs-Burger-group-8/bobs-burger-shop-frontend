import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../services/ProductService';
import EditOrderList from './EditOrderList';
import './EditOrders.css'

const BASE_API_URL = 'https://localhost:7141/';

function EditOrders() {
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    async function getOrders() {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
          };
        await axios.get(BASE_API_URL + "orders", config)
            .then(res => setOrders(res.data))
        setProducts(await getAllProducts())
        setLoading(false)
    }

    useEffect(() => {
        getOrders()
    }, [])

    if(loading) {
        return <p>Loading orders...</p>
    }

  return (
    <EditOrderList orders={orders} products={products} />
  )
}

export default EditOrders
