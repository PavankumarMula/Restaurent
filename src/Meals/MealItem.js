import React from "react";
import './MealItem.css';
import MealForm from "./MealItemForm";
const MealItem = props =>{
    const price=`$${props.price.toFixed(2)}`
    return <div className="meal">
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
        <div><MealForm id={props.id}/></div>
    </div>
    
}
export default MealItem;