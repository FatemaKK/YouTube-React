import { Link } from "react-router-dom";
import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <section>
          <p>
            <img
              src="https://c.tenor.com/hYSGG867a1YAAAAC/youtube-logo.gif"
              height="50px"
              width="100px"
              alt="YouTube-Logo"
            />
          </p>
          <Link to="/">Home</Link> 
          {" "}
          <Link to="/about">About</Link>
        </section>
      </div>
    );
  }
}

//

export default NavBar;
