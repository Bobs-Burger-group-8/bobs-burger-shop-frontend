import React from 'react'
import './Receipt.css'
import ReceiptItemList from './ReceiptItemList'
import Total from '../Cart/Total'

export default function Receipt() {
  return (
    
    <div className='receipt-container'>
        <div className='receipt-header'>
            <h2>Thank you for your Bobder!</h2>
        </div>
        <div className='receipt-content'>
            <h3>You purchased these bobs:</h3>
            <hr />
            <div className='receipt-item-list'>
                <ReceiptItemList></ReceiptItemList>
            </div>
            <h3>Your total:</h3>
            <div className='receipt-total'>
                <Total></Total>
            </div>
        </div>
    </div>
  )
}