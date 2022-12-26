import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../CartItems/Cart-Context";
import './HeaderButtonIcon.css'
const HeaderButtonIcon = (props) =>{
    const cartcontents=useContext(CartContext)
    const numberCartItems=cartcontents.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0)
    return <button className="button" onClick={props.customOnClick}>
        <span className="icon"><CartIcon/></span>
        <span >Your Cart</span>
        <span className="badge">{numberCartItems}</span>
    </button>
}
export default HeaderButtonIcon;