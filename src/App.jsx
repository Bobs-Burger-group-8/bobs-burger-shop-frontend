import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Favourites from './views/Favourites.jsx';
import Checkout from './views/Checkout.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

let AppCtx = createContext();

const App = () => {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [user, setUser] = useState({
    "id": 1,
    "firstName": "Bob",
    "lastName": "Burgerman",
    "email": "bob@burger.com",
    "phone": "12345678",
    "street": "Burger Street 2",
    "city": "Burger Town"
  })
  
  const toggleFavorite = (item) => {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter(element => element.productId !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
    console.log(favorites)
  };

  function updateCart(input){
    setCart(input)
  }

  return (
    <QueryClientProvider client={queryClient}>
    <AppCtx.Provider value={{cart:cart, updateCart:updateCart, favorites, onToggleFavorite:toggleFavorite}}>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      </AppCtx.Provider>
    </QueryClientProvider>
    
  );
};

export {App, AppCtx};
