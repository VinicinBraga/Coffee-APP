import "./index.css";

export default function Cards(props) {
  return (
    <div className="card-container">
      <h2>Produto: {props.coffeeName}</h2>
      <h3>Description: {props.coffeeDescription}</h3>
      <h3>Price: $ {props.coffeePrice},00</h3>
      <div>
        <button className="update-btn">Update Card</button>
      </div>
      <button className="delet-btn">Delete Card</button>
    </div>
  );
}
