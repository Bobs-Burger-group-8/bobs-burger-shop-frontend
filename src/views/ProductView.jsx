import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppCtx } from "../App";
import { getProduct, getProductIngredients } from "../services/ProductService";
import { FaHeart } from "react-icons/fa";
import Ingredients from '../components/Ingredient'

export default function ProductView(){
    const[product, setProduct] = useState(false)
    const [ingredients, setIngredients] = useState([])
    let {id} = useParams();
    let ctx = useContext(AppCtx)
    
    if(product==false){
        let item = ctx.products.find(item=> item.id.toString()==id.toString())
       if(item !== undefined){
        setProduct(item);
        
        }

    }    
    useEffect(()=>{
        
        if( product.category!='drink'){
         getIngredients()}
    },[product]) 

    

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
        <div className="card" style={{maxHeight:'200px'}}>
       <div className="card-content">
       <h2 className="cart-title" style={{paddingLeft:'20px'}} >{product.name}</h2>
        <button className='add-to-cart' onClick={handleClick}>Add to cart</button><p className="card-description">{product.description}</p></div>
        <div>
          <img className="card-image" src={product.image} alt={product.name} />
          <button className="favorite-button" onClick={() => ctx.onToggleFavorite(product)}>
           <FaHeart/>
          </button>
          <hr />
        </div>
        <Ingredients ingredients={ingredients}/>
        
      </div>
        
        </>
    )
}