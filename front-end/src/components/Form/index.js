import React, { useState, useEffect } from "react";
import ProductCards from "../ProductCards/index";
import Axios from "axios";
import "../Form/index.css";

export default function Form() {
  const [productName, setProductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setProductList(response.data);
      console.log(response.data);
    });
  }, []);

  const submitProduct = () => {
    Axios.post("http://localhost:3001/api/insert", {
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
    }).then(() => {
      alert("Sucsses to insert");
    });
  };

  return (
    <div className="form-main">
      <div className="form-conteiner">
        <label>Product Name:</label>
        <input
          type="text"
          name="productName"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          name="review"
          onChange={(e) => {
            setproductDescription(e.target.value);
          }}
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          onChange={(e) => {
            setproductPrice(e.target.value);
          }}
        />
        <div>
          <button onClick={submitProduct}>Submit</button>
        </div>
      </div>
      <div className="form-card">
        <h1>Coffees</h1>
        {productList.map((value) => {
          return (
            <ProductCards
              name={value.productName}
              description={value.productDescription}
              price={value.productPrice}
            />
          );
        })}
      </div>
    </div>
  );
}
