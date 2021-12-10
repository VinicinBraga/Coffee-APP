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
        coffeeList={props.coffeeList}
        setCoffeeList={props.setCoffeeList}
      />
      <div className="card-container" onClick={() => handleOpenEdit()}>
        <h2>Produto: {props.coffeeName}</h2>
        <h3>Description: {props.coffeeDescription}</h3>
        <h3>Price: $ {props.coffeePrice},00</h3>
      </div>
    </>
  );
}
