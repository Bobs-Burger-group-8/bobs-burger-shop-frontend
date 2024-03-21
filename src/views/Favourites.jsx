/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import CardList from '../components/Cards/CardList'
import { AppCtx } from '../App'

function Favourites({updateCart}) {
  let ctx = useContext(AppCtx)
  const[favProducts, setFavProducts] = useState([])
  
  let allFavs = ctx.allFavs;
  
  useEffect(()=>{
    let arr = []
    for(let i = 0; i<allFavs.length; i++){
      
       let index =  ctx.products.findIndex(item=>item.id==allFavs[i].productId)
       if(index>0) arr.push(ctx.products[index])
       allFavs.splice(index,1)
  
    }
    setFavProducts(arr)
  
  },[ctx.allFavs])



  


  return (<>
    
    <div>Favourites</div>
    <h2>Your Favourites</h2>
    {favProducts && <CardList products={favProducts} updateCart={updateCart}/>}
    </>
  )
}

export default Favourites