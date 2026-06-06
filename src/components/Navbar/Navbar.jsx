import "./Navbar.css";
import logo from "../../assets/logos/logo.png";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <img src={logo} alt="Planet Logo" className="logo" /> 

      </div>
    </nav>
  );
}

export default Navbar;