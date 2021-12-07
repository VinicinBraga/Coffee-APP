import "../ProductCards/index.css";

export default function Header(props) {
  const { name, description, price, deleteProduct } = props;

  return (
    <div className="card-container">
      <h2>Produto: {name}</h2>
      <h3>Description:{description} </h3>
      <h3>Price: {price}</h3>

      <div>
        <input type="text" />
        <button className="update-btn">Update Card</button>
      </div>
      <button
        className="delete-btn"
        onClick={() => {
          deleteProduct(name);
        }}
      >
        Delete Card
      </button>
    </div>
  );
}
