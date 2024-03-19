/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '../components/Cards/Card';
import Cart from './Cart';
import { getAllProducts } from '../services/ProductService';


function Home() {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([])
  const[isLoading, setLoadingStatus] = useState(true)

  

  
  const get = async ()=>{
    let response =  await getAllProducts()
    setProducts(response)
  }

  if (products[0] == undefined)get()

  

  const toggleFavorite = (title) => {
    if (favorites.includes(title)) {
      setFavorites(favorites.filter(item => item !== title));
    } else {
      setFavorites([...favorites, title]);
      // You need to have the 'history' object defined here to use it
      // history.push('/favorites'); // Navigate to Favorites page
    }
  };

  return (<>
    <div className="home">
      <h1 className='home-header'>Popular Boggers!</h1>
      <div className="cards-horizontal">
        <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
        <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
        <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
        {/* Other Card components */}
      </div>
      <div className="cards-horizontal">
        <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
        <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
        <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
        {/* Other Card components */}
      </div>
      <div className="cards-horizontal">
        <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
        <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
        <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
        {/* Other Card components */}
      </div>
    </div>
    <div>
      <Cart/>
    </div></>
  );
}

export default Home;
