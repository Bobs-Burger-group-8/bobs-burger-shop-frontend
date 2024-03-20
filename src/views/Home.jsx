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


function Home() {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  let ctx = useContext(AppCtx)
 

  
  const loadProducts = async ()=>{
    let response =  await getAllProducts()
    setProducts(response)
    let favs = await getFavourites();
    setFavorites(favs)
  }
  if (products[0] == undefined){ loadProducts()}

  

  const toggleFavorite = (item) => {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter(element => element.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
    console.log(favorites)
  };



  return (
    <div className="home">
      <h1 className='home-header'>Popular Boggers!</h1>
      <div className="content-container">
        <div className="cards-horizontal">
        <CardList products={products} updateCart={(item)=>setCart([...cart,item])}/>
        </div>
        <div className='cart-container'>
          <Cart></Cart>
          <div className='checkout-container'>
            <li className='checkout-btn'><Link to="/checkout">Checkout</Link></li>
          </div>
        </div>
    </div>
  </div>
  );
}

export default Home;
