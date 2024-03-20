import { createContext, useState } from 'react';
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
let TokenCtx = createContext();
let UserCtx = createContext();

const App = () => {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  localStorage.setItem("userId", null)
  localStorage.setItem("token", null)
  const [defaultUser, setDefaultUser] = useState({
    "id": 1,
    "firstName": "Bob",
    "lastName": "Burgerman",
    "email": "bob@burger.com",
    "phone": "12345678",
    "street": "Burger Street 2",
    "city": "Burger Town"
  })

  let cartFromLocal = localStorage.getItem('cart');
  if(cart[0] == undefined && cartFromLocal!==null){
    cartFromLocal = JSON.parse(localStorage.getItem('cart'));
    setCart(cartFromLocal)
  }
  
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
    localStorage.setItem('cart',JSON.stringify(cart))
  }

  function emptyCart(){
    setCart([])
    localStorage.removeItem('cart')
  }

  return (
    <QueryClientProvider client={queryClient}>
    <AppCtx.Provider value={{cart:cart, updateCart:updateCart, favorites, onToggleFavorite:toggleFavorite, emptyCart:emptyCart}}>
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

export {App, AppCtx, TokenCtx, UserCtx};
