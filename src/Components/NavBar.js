import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        
        <ul className="nav-links">
          <li>
            <Link to="/Home">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
