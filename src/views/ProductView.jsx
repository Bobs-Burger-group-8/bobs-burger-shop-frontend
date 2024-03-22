import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppCtx } from "../App";
import { getProduct, getProductIngredients } from "../services/ProductService";
import { FaHeart } from "react-icons/fa";
import Ingredients from '../components/Ingredient'
import "../components/Cards/Cards.css";
import Home from "./Home";
import "../App.css"

export default function ProductView(){
    const[product, setProduct] = useState(false)
    const [ingredients, setIngredients] = useState([])
    let {id} = useParams();
    let ctx = useContext(AppCtx)
    
    if(product==false){
        getProduct()
    }    

    
    useEffect(()=>{
        getProduct()
        if( product.category!='drink'){
         getIngredients()}
    },[id]) 

    useEffect(()=>{
        if( product.category!='drink'){
         getIngredients()}
    },[product]) 

    function getProduct(){
        let item = ctx.products.find(item=> item.id.toString()==id.toString())
        if(item !== undefined){
         setProduct(item);
         
         }
    }

    async function getIngredients(){
       let response =  await getProductIngredients(id)
          
       setIngredients(await response);
       }      
    
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
        alert('Product was successfully added to cart')
      }
  
    return(<>
   <h2 className="cart-title" style={{paddingLeft:'20px'}} >{product.name}</h2>
        <div className="container" style={{minWidth:'50vw', paddingLeft:'2rem'}}>
        <div>
        <img className="card-image" src={product.image} alt={product.name} />
        </div>
       <div style={{paddingRight:'20px', paddingLeft:'20px'}}><h2>£{product.price}</h2><h3>Descrition</h3><p className="card-description">{product.description}</p><br></br><button className='add-to-cart' onClick={handleClick}>Add to cart</button></div>
       <div style={{minWidth:'2rem'}}>
        </div>
        <Ingredients ingredients={ingredients}/>
        </div>
      
        <div>
        
         
          <button className="favorite-button" onClick={() => ctx.onToggleFavorite(product)}>
          <FaHeart style={{color: "black"}} />
          </button>
          
          <hr />
       
        </div>
      <Home/>
        
        </>
    )
}