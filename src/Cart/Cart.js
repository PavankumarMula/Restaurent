import React from "react";
import Modal from "../Ui/Modal";
import './Cart.css';
const Cart= props =>{
    const cartitems=<ul className="item-list">{[{id:"c1",name:'Sushi',amount:2,price:12.99}].map(item=>  <li key={item.id}> {item.name}</li>)}</ul>
    return <Modal>
        {cartitems}
        <div className="total">
            <span>Total Amount</span>
            <span>33.99</span>
        </div>
        <div className="actions">
            <button className="button--alt" onClick={props.onHideCart}>Close</button>
            <button className="but">Order</button>
        </div>
    </Modal>
}
export default Cart;