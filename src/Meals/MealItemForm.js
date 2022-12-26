import React from "react";
import "./MealItemForm.css";
import Input from "./Input";
const MealForm = (props) => {
  return (
    <div className="form">
      <Input
        label="Amount"
        input={{
          id: "Amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </div>
  );
};
export default MealForm;
