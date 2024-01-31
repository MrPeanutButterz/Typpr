import "./Navbar.css"
import logo from "../../assets/Logo.svg"

export default function Navbar() {
  return <>
    <nav>
      <div className="navbar-left">
        <img className="logo" src={logo} alt="Logo"/>
        <p>about</p>
      </div>
      <div className="navbar-right">
        <p>login</p>
      </div>
    </nav>
  </>
};