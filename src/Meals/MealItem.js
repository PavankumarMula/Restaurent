import React from "react";
import { useContext } from "react";
import './MealItem.css';
import MealForm from "./MealItemForm";
import CartContext from "../CartItems/Cart-Context";

const MealItem = props =>{
    const cartctx=useContext(CartContext);

    const enterdAmountHandler=amount=>{
        cartctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
        console.log(cartctx);
    }
    const price=`$${props.price.toFixed(2)}`
    return <div className="meal">
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
        <div><MealForm onAddCart={enterdAmountHandler}/></div>
    </div>
    
}
export default MealItem;