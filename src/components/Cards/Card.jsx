/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Import heart icon from react-icons library
import "./Cards.css";
import { useContext } from 'react';
import { AppCtx } from '../../App';

function Card(props) {
let ctx = useContext(AppCtx)
const product = props.product;

function handleClick(){
  let cartItemIndex = ctx.cart.findIndex(e=>e.id== product.id)
  let updateArray = ctx.cart;
  if(cartItemIndex >=0){
    updateArray[cartItemIndex].in_cart++;
    ctx.updateCart(updateArray);
  }else{
     product.in_cart = 1;
     updateArray.push(product)
  }
  ctx.updateCart(updateArray);
}



  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{product.name? product.name:'missing name'}</h2>
        <div className="card-image-container">
          <img className="card-image" src={product.image} alt={product.name} />
          <button className="favorite-button" onClick={() => onToggleFavorite(name)}>
            <FaHeart />
          </button>
          <hr />
        </div>
        <p className="card-description">{product.description}</p>
        <button className='add-to-cart' onClick={handleClick}>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
