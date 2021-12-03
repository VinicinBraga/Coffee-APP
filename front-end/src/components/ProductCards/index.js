import "../ProductCards/index.css";

export default function Header(props) {
  const { name, description, price } = props;

  return (
    <div className="card-container">
      <h2>Produto: {name}</h2>
      <h3>Description:{description} </h3>
      <h3>Price: {price}</h3>
    </div>
  );
}
