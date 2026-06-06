import "./Navbar.css";
import logo from "../../assets/logos/logo.png";


function Navbar() {
  return (
    <nav className="navbar align_container">
      <div className="container navbar-container">
        <img src={logo} alt="Planet Logo" className="logo" /> 

      </div>
    </nav>
  );
}

export default Navbar;