import "./Navigation.css"
import Logo from "../logo/logo";
import {NavLink} from "react-router-dom";
import logo from "../../assets/Logo.svg"
import profilePic from "../../assets/ProfilePicture.png"

export default function Navigation() {

  const user = true

  function userInfoBar() {
    return <>
      <NavLink to="/profile">

        <div className="user-container">
          <div className="user">
            <h1>John Doe</h1>
            <p>JohnDoe@email.com</p>
            <p>level : 123</p>
          </div>
          <img className="picture" src={profilePic} alt="Profile picture"/>
        </div>
      </NavLink>
    </>
  }

  return <>
    <nav>
      <div className="nav-left">
        <NavLink to="/"><img src={logo} alt=""/></NavLink>
        <NavLink to="/about"><p>about</p></NavLink>
      </div>
      <div className="nav-right">
        {user ? userInfoBar() : <p>login</p>}
      </div>
    </nav>
  </>
};