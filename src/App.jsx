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
import { getFavouritesByUserId, removeFavourite, saveNewFavourite } from './services/FavouriteService.jsx';
import ProductView from './views/ProductView.jsx';
import { getAllProducts } from './services/ProductService.jsx';
import EditOrders from './components/EditOrders/EditOrders.jsx';

const queryClient = new QueryClient();

let AppCtx = createContext();
let LoggedInCtx = createContext();

const App = () => {
  const [cart, setCart] = useState([])
  const [receipt, setReceipt] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [products, setProducts] = useState([])
  const [admin, setAdmin] = useState(false)
  let userId = localStorage.getItem("userId")

 let cartFromLocal = localStorage.getItem('cart');
  
  useEffect(() => {
    if(localStorage.getItem("userId") !== null && loggedIn==false) {
      setLoggedIn(true)
    }
    if(localStorage.getItem("role") === "0") {
      setAdmin(true)
    }
    if(cart[0] == undefined && cartFromLocal!==null){
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
    if(favorites[0] === undefined){
      loadFavourites()
    }
   
   if(products[0] == undefined) loadProducts();
  }, [loggedIn])

  const loadProducts = async ()=>{
    let response =  await getAllProducts()
    setProducts(response)
  
  }
  
  const toggleFavorite = async (item) => {
    if(loggedIn==false){
      alert("Log in to save new favourites")
    }else{

    try{ 
      
      let favId = -1;
      
      for(let i = 0; i<favorites.length; i++){
        if((favorites[i].userId === userId) && ((favorites[i].productId === item.id))){
         favId = favorites[i].id;
        }
      }

      if (favId > 0) {
          let response = await removeFavourite(favId)
       
          let updateArr = favorites.filter(element => element.id !== response.id);
          setFavorites(updateArr)
        
      } else {    
          let response = await saveNewFavourite(item.id)
          
            setFavorites([...favorites,  await response ]);
    }}
    catch(error){
      console.log(error)
      
     }
      
    }
    console.log('done')
  };

  const loadFavourites = async ()=>{
    if(localStorage.getItem("userId") !== null && loggedIn==false) {
      let response =  await getFavouritesByUserId()
        if(response[0] !== undefined){
          setFavorites(response)

        }
    }
  }

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
    <AppCtx.Provider value={{cart:cart, updateCart:updateCart, favorites, onToggleFavorite:toggleFavorite, emptyCart:emptyCart, products:products, allFavs:favorites, setProducts:setProducts, setReceipt:setReceipt, receipt:receipt}}>
      <LoggedInCtx.Provider value={{loggedIn: loggedIn, setLoggedIn: setLoggedIn, admin: admin, setAdmin: setAdmin}}>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/editorders" element={<EditOrders />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/registerd" element={<Registered />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<ProductView/>} />
        </Routes>
      </Router>
      </LoggedInCtx.Provider>
      </AppCtx.Provider>
    </QueryClientProvider>
  );
};

export {App, AppCtx, LoggedInCtx};
