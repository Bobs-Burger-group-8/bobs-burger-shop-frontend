/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { getAllProducts } from '../services/ProductService';
import Cart from '../components/Cart/Cart';
import { Link } from 'react-router-dom';
import CardList from '../components/Cards/CardList';
import { getFavourites } from '../services/FavouriteService';
import { App, AppCtx } from '../App';
import CartItemList from '../components/Cart/CartItemList';
import Total from '../components/Cart/Total';
import '../components/Cart/Cart.css'
import Favourites from './Favourites';


function Home() {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  let ctx = useContext(AppCtx)
 

  
  const loadProducts = async ()=>{
    let response =  await getAllProducts()
    setProducts(response)
    let favs = response.slice(0,4)//await getFavourites();
    console.log(favs)
    if(favs[0] !== null){
    setFavorites(favs)}else{
      let arr = await response.slice(0,4)
      setFavorites(arr)
      console.log(arr)
    }
  }
  if (products[0] == undefined){ loadProducts()}

  console.log(favorites)



  return (
    <div className="home">
      <h1 className='home-header'>Popular Boggers!</h1>
      <div className="content-container">
        <div className="cards-horizontal">
        <CardList products={products} updateCart={(item)=>setCart([...cart,item])}/>
        </div>
        <div className="cards-horizontal">
        <Favourites products={favorites}/>
        </div>
        <div className='cart-container'>
          <Cart refreshPage={(input)=>setCart(input)}></Cart>
          <div className='checkout-container'>
            <button onClick={ctx.emptyCart} className='empty-cart-btn'>Empty cart</button>
            <li className='checkout-btn'><Link to="/checkout">Checkout</Link></li>
          </div>
        </div>
        
    </div>
  </div>
  );
}

export default Home;
