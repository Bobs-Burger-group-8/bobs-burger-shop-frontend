/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Favourites from './views/Favourites.jsx';
import Cart from './views/Cart.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

let AppCtx = createContext();
const cartSample = [{
  id: 0,
  name: "Cheese",
  description: "",
  category: "burger",
  price: 1,
  image: "",
  ingredients: [],
  in_cart: 2
}, {
  id: 1,
  name: "Bacon",
  description: "",
  category: "burger",
  price: 1,
  image: "",
  ingredients: [],
  in_cart: 1
}]

const App = () => {
  const [cart, updateCart] = useState(cartSample)

  function handleCart(input){
      updateCart(input);

  }

  return (
    <AppCtx.Provider value={{cart:cart, updateCart:handleCart}}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </AppCtx.Provider>
  );
};

export {App, AppCtx};
