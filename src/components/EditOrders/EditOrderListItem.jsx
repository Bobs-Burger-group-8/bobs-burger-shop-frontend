import axios from 'axios';
import React from 'react'
import './EditOrders.css'

const BASE_API_URL = 'https://localhost:7141/orders/';

function EditOrderListItem({ order, index, products }) {

    async function toggleCompleted(event) {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        };
        const response = await axios.put(BASE_API_URL + order.id + '?completed=' + event.target.checked, null, config)
        event.target.checked = response.data.completed
    }

  return (
    <li className='order'>
    <h2>Order number: {index+1}</h2>
    {order.products.reverse().map((product, j) => (
        <div key={j} className='item'>
            <p>{products.find(prod => prod.id === product.productId).name}</p>
            <div className='item-prices'>
            <p>x{product.quantity}</p>
            <p>£{products.find(prod => prod.id === product.productId).price}</p>
            </div>
        </div>
    ))}
    <div className='total'>
        <h4>Total:</h4>
        <h4>£{order.total}</h4>
    </div>
    <div className='completed'>
        <p>Completed: </p>
        <input type='checkbox' checked={order.completed} onChange={toggleCompleted} />
    </div>
</li>
  )
}

export default EditOrderListItem
