import "../Header/index.css";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <div className="main-container">
      <img className="logo" src={logo} alt="logo" />
      <h1 className="title">.Coffee Aplication</h1>
    </div>
  );
}
