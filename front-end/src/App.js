import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [productName, setProductName] = useState("");
  const [productDescription, setproductDescription] = useState("");

  const submitProduct = () => {
    Axios.post("http://localhost:3001/api/insert", {
      productName: productName,
      productDescription: productDescription,
    }).then(() => {
      alert("Sucsses to insert");
    });
  };

  return (
    <div className="App">
      <h1>Products - App</h1>

      <div className="form">
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

        <button onClick={submitProduct}>Submit</button>
      </div>
    </div>
  );
}

export default App;
