import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
<<<<<<< HEAD
      <nav className="nav">
        <h3 className="youTube">
          <Link to="/">
            <img
              className="logo"
              src="https://c.tenor.com/hZy9ORpOKdQAAAAC/you-tube-logo.gif"
              alt="YouTube-Logo"
              width="100px"
              height="40px"
            />
          </Link>
        </h3>
        <ul className="nav-links">
          <li>
            <Link to="/Home">🅷🅾🅼🅴</Link>
          </li>
          <li>
            <Link to="/About">🅰🅱🅾🆄🆃</Link>
=======
      <nav>
        
        <ul className="nav-links">
          <li>
            <Link to="/Home">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
>>>>>>> 1cc6a5c91e16f8d84f72b59104b31859b11e6f69
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
