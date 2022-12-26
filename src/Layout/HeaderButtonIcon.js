import React from "react";
import CartIcon from "../Cart/CartIcon";
import './HeaderButtonIcon.css'
const HeaderButtonIcon = (props) =>{
    return <button className="button" onClick={props.customOnClick}>
        <span className="icon"><CartIcon/></span>
        <span >Your Cart</span>
        <span className="badge">3</span>
    </button>
}
export default HeaderButtonIcon;