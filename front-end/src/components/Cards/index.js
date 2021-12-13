import React, { useState } from "react";
import "./index.css";
import FormDialog from "../Dialog/index.js";

export default function Cards(props) {
  const [open, setOpen] = useState(false);

  const handleOpenEdit = () => {
    setOpen(true);
  };

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        id={props.id}
        coffeeName={props.coffeeName}
        coffeeDescription={props.coffeeDescription}
        coffeePrice={props.coffeePrice}
        coffeeWeight={props.coffeeWeight}
        coffeeList={props.coffeeList}
        setCoffeeList={props.setCoffeeList}
      />
      <div className="card-container" onClick={() => handleOpenEdit()}>
        <h2>Coffee: {props.coffeeName}</h2>
        <h3> Description:</h3>
        <h4 className="text-descripition">{props.coffeeDescription}</h4>
        <h3>Weight: {props.coffeeWeight}g</h3>
        <h3>Price: {props.coffeePrice}</h3>
      </div>
    </>
  );
}
