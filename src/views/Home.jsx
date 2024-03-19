/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Card from '../components/Cards/Card';
import Cart from './Checkout';
import { Link } from 'react-router-dom';

function Home() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (title) => {
    if (favorites.includes(title)) {
      setFavorites(favorites.filter(item => item !== title));
    } else {
      setFavorites([...favorites, title]);
      // You need to have the 'history' object defined here to use it
      // history.push('/favorites'); // Navigate to Favorites page
    }
  };

  return (
    <div className="home">
      <h1 className='home-header'>Popular Boggers!</h1>
      <div className="content-container">
        <div className="cards-horizontal">
          <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
          <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
          <Card title="Classic Burger" description="The all-time favorite classic burger with juicy beef patty, lettuce, tomato, and cheese." onToggleFavorite={toggleFavorite} />
        </div>
        <div className='cart-container'>
          <Cart />
          <div className='checkout-container'>
            <li className='checkout-btn'><Link to="/checkout">Checkout</Link></li>
          </div>
        </div>
    </div>
  </div>
  );
}

export default Home;
