import IngredientItem from "./ingredientItem";

export default function IngredientList({list}){
    return(
        <ul>
            {list.map((item, index)=>(<IngredientItem key={index} item={item}/>))}
        </ul>
    )
}