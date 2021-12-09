import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/Home">🅷🅾🅼🅴</Link>
          </li>
          <li>
            <Link to="/About">🅰🅱🅾🆄🆃</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
