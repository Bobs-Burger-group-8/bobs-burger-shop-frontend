import React from 'react'
import EditOrderListItem from './EditOrderListItem'

function EditOrderList({ orders, products }) {
  return (
    <ul className='orders'>
      {orders.map((order, index) => (
        <EditOrderListItem key={index} index={index} order={order} products={products} />
      ))}
    </ul>
  )
}

export default EditOrderList
