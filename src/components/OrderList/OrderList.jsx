import React from 'react'
import OrderListItem from './OrderListItem'

function OrderList({ orders, products }) {
  return (
    <ul className='history'>
    {orders.map((order, index) => (
        <OrderListItem order={order} key={index} index={index} products={products} />
    ))}
</ul>
  )
}

export default OrderList
