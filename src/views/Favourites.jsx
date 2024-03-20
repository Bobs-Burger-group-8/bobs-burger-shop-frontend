/* eslint-disable no-unused-vars */
import React from 'react'
import CardList from '../components/Cards/CardList'

function Favourites({products}) {
  console.log(products)
  return (<>
    <div>Favourites</div>
    <CardList products={products}/></>
  )
}

export default Favourites