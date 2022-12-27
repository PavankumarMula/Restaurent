import CartContext from "./Cart-Context";
import React,{useReducer} from "react";

const defaultCart={
    items:[],
    totalamount:0
}

const cartReducer = (state,action) =>{

 if(action.type ==='ADD'){
    const updateitems=state.items.concat(action.item);
    const totalamountupdated=state.totalamount+action.item.price*action.item.amount;
    return {items:updateitems,totalamount:totalamountupdated}
 }
}

const CartProvider = (props) => {
    const [cartState,dispatchCartState] =useReducer(cartReducer,defaultCart)
    console.log(cartState,dispatchCartState);
  const addItemHandler = (item) => {
    dispatchCartState({type:'ADD',item:item})
  };
  const removeItemHandler = (id) => {
    
        dispatchCartState({type:'REMOVE',id:id})
      
  };
  const CartItems = {
    items: cartState.items,
    totalamount: cartState.totalamount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={CartItems}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
