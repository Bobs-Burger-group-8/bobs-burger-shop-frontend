import React, { useContext, useEffect, useState } from 'react';
import { getAllProducts } from '../services/ProductService';
import { Link } from 'react-router-dom';
import CardList from '../components/Cards/CardList';
import { AppCtx } from '../App';
import CartItemList from '../components/Cart/CartItemList';
import '../components/Cart/Cart.css';
import Favourites from './Favourites';
import ProductFilter from '../components/ProductFilter/ProductFilter';

function Home() {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const ctx = useContext(AppCtx);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [ctx.products]);

  const loadProducts = async () => {
    const response = await getAllProducts();
    ctx.setProducts(response);
  };

  // Update list on filter based on context
  const filterProducts = () => {
    setFilteredProducts(ctx.products);
  };

  return (
    <div className="home">
      <h1 className='home-header'>Popular Boggers!</h1>
      <ProductFilter setFilteredProducts={setFilteredProducts} products={ctx.products} />
      <div className="content-container">
        <div className="product-list-container">
          <CardList products={filteredProducts} updateCart={(item) => setCart([...cart, item])} />
        </div>
        <div className='cart-container'>
          <CartItemList cart={cart} />
          <div className='checkout-container'>
            <button onClick={() => setCart([])} className='empty-cart-btn'>Empty cart</button>
            <li className='checkout-btn'><Link to="/checkout">Checkout</Link></li>
          </div>
        </div>
      </div>
      <div className="favorites-container">
        <Favourites />
      </div>
    </div>
  );
}

export default Home;
