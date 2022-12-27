import React from "react";
import { useRef } from "react";
import "./MealItemForm.css";
import Input from "./Input";

const MealForm = (props) => {
  const amountRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountnumber= +enteredAmount;
    if (
      enteredAmountnumber > 5 ||
      enteredAmount.trim().length === 0 ||
      enteredAmountnumber < 1
    ) {
      return;
    }
    props.onAddCart(enteredAmountnumber)
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};
export default MealForm;
