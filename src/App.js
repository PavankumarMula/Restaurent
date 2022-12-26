import React,{useState} from "react";
import Cart from "./Cart/Cart";
import CartProvider from "./CartItems/CartProvider";
import Header  from "./Layout/Header";
import Meals from "./Meals/Meals";
function App() {
  const [cartIsShown,setIsCartISShown]=useState(false);
  const showModalHandler=()=>{
    setIsCartISShown(true);
  }
  const hideModalHandler=()=>{
    setIsCartISShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideModalHandler}></Cart>}
      <Header onShowCart ={showModalHandler}  />
      <Meals/>
    </CartProvider>
  );
}

export default App;
