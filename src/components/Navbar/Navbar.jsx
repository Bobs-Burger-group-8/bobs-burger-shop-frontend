/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import "./Navbar.css"
import Counter from '../Cart/Counter';
import { TokenCtx } from '../../App';

function Navbar() {
  const {token, setToken} = useContext(TokenCtx)
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo"/>
        </Link>
      </div>
      <ul className="navbar-links">
        {!token &&
        <li>
          <Link to="/login">Login/Register</Link>
        </li>
        }
        {token ?
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        :
        <li>
        <Link to="/login">Favourites</Link>
      </li>
        }
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar