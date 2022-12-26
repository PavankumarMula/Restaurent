import React,{useState} from "react";
import Cart from "./Cart/Cart";
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
    <div>
      {cartIsShown && <Cart onHideCart={hideModalHandler}></Cart>}
      <Header onShowCart ={showModalHandler}  />
      <Meals/>
    </div>
  );
}

export default App;
