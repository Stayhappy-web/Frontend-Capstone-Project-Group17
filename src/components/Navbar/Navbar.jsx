import "./Navbar.css";
import logo from "../../assets/logos/logo.png";


function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="Planet Logo" className="logo" /> 

    </nav>
  );
}

export default Navbar;