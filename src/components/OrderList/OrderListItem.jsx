import React from 'react'

function OrderListItem({ order, index, products }) {
  return (
    <li className='history--order'>
            <h3>Order number: {index+1}</h3>
            {order.products.reverse().map((product, j) => (
                <div key={j} className='history--item'>
                    <p>{products.find(prod => prod.id === product.productId).name}</p>
                    <p>x{product.quantity}</p>
                    <p>£{products.find(prod => prod.id === product.productId).price}</p>
                </div>
            ))}
            <div className='history--total'>
                <h4>Total:</h4>
                <h4>£{order.total}</h4>
            </div>
        </li>
  )
}

export default OrderListItem
