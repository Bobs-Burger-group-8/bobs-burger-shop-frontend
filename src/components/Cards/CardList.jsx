import Card from "./Card";

export default function CardList({products, updateCart}){ 

// eslint-disable-next-line react/prop-types
if(products[0]!== undefined){
return(

<>
{
   products.map((product, index)=>(<Card key={index} product={product} updateCart={updateCart}/>)) 
}</>
)}}