import "../ProductCards/index.css";

export default function Header(props) {
  const { name, description, price } = props;

  return (
    <div className="card-container">
      <h3>
        Produto: {name} | Description:
        {description} | Price: {price}
      </h3>
    </div>
  );
}
