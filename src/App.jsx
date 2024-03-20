import { createContext, useEffect, useState } from 'react';
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
import Logout from './components/Logout/Logout.jsx';

const queryClient = new QueryClient();

let AppCtx = createContext();
let LoggedInCtx = createContext();

const App = () => {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("userId") !== null) {
      setLoggedIn(true)
    }
    if(cart[0] == undefined && cartFromLocal!==null){
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  let cartFromLocal = localStorage.getItem('cart');
  
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
    if (input.length === 0) {
      localStorage.removeItem('cart')
    } else {
      localStorage.setItem('cart',JSON.stringify(cart))
    }
  }

  function emptyCart(){
    setCart([])
    localStorage.removeItem('cart')
  }

  return (
    <QueryClientProvider client={queryClient}>
    <AppCtx.Provider value={{cart:cart, updateCart:updateCart, favorites, onToggleFavorite:toggleFavorite, emptyCart:emptyCart}}>
      <LoggedInCtx.Provider value={{loggedIn: loggedIn, setLoggedIn: setLoggedIn}}>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/registerd" element={<Registered />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      </LoggedInCtx.Provider>
      </AppCtx.Provider>
    </QueryClientProvider>
  );
};

export {App, AppCtx, LoggedInCtx};
