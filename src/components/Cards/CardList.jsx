import Card from "./Card";

export default function CardList(props){ 

// eslint-disable-next-line react/prop-types
let {products} = props
if(products[0]!== undefined){
return(

<>
{
   products.map((product, index)=>(<Card key={index} product={product}/>)) 
}</>
)}}