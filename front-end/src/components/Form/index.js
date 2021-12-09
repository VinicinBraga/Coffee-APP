import React, { useState } from "react";
import ProductCards from "../Cards/index";
import Axios from "axios";
import "../Form/index.css";

export default function Form() {
  const [values, setValues] = useState();

  const hadleChangeValues = (value) => {
    setValues((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSubmitButton = () => {
    Axios.post("http://localhost:3001/api/insert", {
      coffeeName: values.coffeeName,
      coffeeDescription: values.coffeeDescription,
      coffeePrice: values.coffeePrice,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="form-main">
      <div className="form-conteiner">
        <label className="label-form">Product Name:</label>
        <input
          className="input-form"
          type="text"
          name="coffeeName"
          onChange={hadleChangeValues}
        />
        <label className="label-form">Description:</label>
        <input
          className="input-form-description"
          type="text"
          name="coffeeDescription"
          onChange={hadleChangeValues}
        />
        <label className="label-form">Price:</label>
        <input
          className="input-form"
          type="number"
          name="coffeePrice"
          onChange={hadleChangeValues}
        />
        <div>
          <button className="form-btn" onClick={() => handleSubmitButton()}>
            Submit
          </button>
        </div>
      </div>
      <div className="form-card">
        <h1>Coffees</h1>
        <ProductCards />
      </div>
    </div>
  );
}
