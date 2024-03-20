/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import "./Navbar.css"
import Counter from '../Cart/Counter';
import { LoggedInCtx } from '../../App';

function Navbar() {
  const {loggedIn, setLoggedIn} = useContext(LoggedInCtx)
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    setLoggedIn(false)
    navigate("/")
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo"/>
        </Link>
      </div>
      <ul className="navbar-links">
        {!loggedIn ?
        <li>
          <Link to="/login">Login/Register</Link>
        </li>
        :
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        }
        {loggedIn ?
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        :
        <li>
          <Link to="/login">Favourites</Link>
        </li>
        }
        {loggedIn ?
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        :
        <li>
          <Link to="/login">Checkout</Link>
        </li>
        }
        {loggedIn ?
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        :
        <li>
          <Link to="/login">Profile</Link>
        </li>
        }
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar