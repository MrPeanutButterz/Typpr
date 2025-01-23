import "./Navigation.css"
import {NavLink} from "react-router-dom";
import logo from "../../assets/Logo.svg"
import infoIcon from "../../assets/Icons/Information-circle.svg"

export default function Navigation() {

  function icon(path, icon) {
    return <NavLink to={path}><img src={icon} className="icon" alt="icon"/><div className="icon-underscore"></div></NavLink>
  }

  return <>
    <nav>
      <div>
        <NavLink to="/"><img src={logo} className="logo" alt="logo"/><p className="icon-underscore">Start test</p></NavLink>
        {icon("/about", infoIcon)}
      </div>
    </nav>
  </>
};