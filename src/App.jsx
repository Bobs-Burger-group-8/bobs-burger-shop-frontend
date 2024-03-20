import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Favourites from './views/Favourites.jsx';
import Checkout from './views/Checkout.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginForm from './components/Login/LoginForm.jsx';
import RegisterForm from './components/Register/RegisterForm.jsx';
import Registered from './components/Register/Registered.jsx';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
    <AppCtx.Provider value={{cart:cart, updateCart:handleCart}}>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/registerd" element={<Registered />} />
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
