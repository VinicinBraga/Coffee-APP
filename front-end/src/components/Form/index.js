import React, { useState, useEffect } from "react";
import CoffeeCards from "../Cards/index";
import Axios from "axios";
import "../Form/index.css";

export default function Form() {
  const [values, setValues] = useState();
  const [coffeeList, setCoffeeList] = useState();

  const hadleChangeValues = (value) => {
    setValues((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSubmitButton = () => {
    if (values === undefined) {
      alert("The game store fields must be filled");
    } else {
      Axios.post("http://localhost:3001/api/insert", {
        coffeeName: values.coffeeName,
        coffeeDescription: values.coffeeDescription,
        coffeePrice: values.coffeePrice,
        coffeeWeight: values.coffeeWeight,
      }).then((response) => {
        console.log(response.data);
      });
      window.location.reload();
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setCoffeeList(response.data);
    });
  }, []);

  return (
    <div className="form-main">
      <div className="form-conteiner">
        <label className="label-form">Coffee Type:</label>
        <input
          className="input-form"
          type="text"
          name="coffeeName"
          onChange={hadleChangeValues}
        />
        <label className="label-form">Description:</label>
        <textarea
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
        <label className="label-form">Weight:</label>
        <input
          className="input-form"
          type="number"
          name="coffeeWeight"
          onChange={hadleChangeValues}
        />
        <div>
          <button className="form-btn" onClick={() => handleSubmitButton()}>
            Submit
          </button>
        </div>
      </div>
      <div className="form-card">
        <h1>COFFEES - MENU</h1>
        {typeof coffeeList !== "undefined" &&
          coffeeList.map((value) => {
            return (
              <CoffeeCards
                key={value.id}
                coffeeList={coffeeList}
                setCoffeeList={setCoffeeList}
                id={value.id}
                coffeeName={value.coffeeName}
                coffeeDescription={value.coffeeDescription}
                coffeePrice={value.coffeePrice
                  .toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                  .replace(".", ",")}
                coffeeWeight={value.coffeeWeight}
              />
            );
          })}
      </div>
    </div>
  );
}
