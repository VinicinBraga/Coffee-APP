import "./index.css";

export default function Cards() {
  return (
    <div className="card-container">
      <h2>Produto: </h2>
      <h3>Description: </h3>
      <h3>Price: </h3>

      <div>
        <input type="text" />
        <button className="update-btn">Update Card</button>
      </div>
      <button className="delet-btn">Delete Card</button>
    </div>
  );
}
