import "../Header/index.css";
import logo from "../img/logo.mp4";

export default function Header() {
  return (
    <div className="main-container">
      <video
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        loop
        className="logo"
        type="video/mp4"
        src={logo}
        alt="logo"
      />
      <h1 className="title">.Coffee Aplication - CRUD</h1>
    </div>
  );
}
