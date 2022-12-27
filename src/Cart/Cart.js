import React from "react";
import Modal from "../Ui/Modal";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "../CartItems/Cart-Context";

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const Add = () => {
    console.log("adding item");
  };
  const remove = () => {
    console.log("removing item");
  };
  const totalamount = `$${cartctx.totalamount.toFixed(2)}`;
  const cartitems = (
    <ul className="item-list">
      {cartctx.items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button className="cartbutton" onClick={Add}>
            +
          </button>
          <button className="cartbutton" onClick={remove}>
            -
          </button>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartitems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>
          Close
        </button>
        <button className="but">Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
