import { NavLink } from "react-router-dom";

const Header = ({}) => {
  return (
    <>
      <ul className="header">
      <li><NavLink to="/about">About</NavLink></li> 
      <li><NavLink to="/book">Book</NavLink></li>
     </ul>
    </>
  );
};
export default Header;
