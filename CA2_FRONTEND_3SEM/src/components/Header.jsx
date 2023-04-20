import { NavLink } from "react-router-dom";
import LogIn from "./LoginForm";
import LoggedIn from "./LoggedIn";

const Header = ({}) => {
     return (<ul className="header">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li> 
     </ul>)
  }
export default Header;