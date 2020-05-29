import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <h3 className="navh3">Iterate.</h3>
        <ul className="navlinks">
          <Link to="/login">
            <li className="navlinks">Login</li>
          </Link>
          <Link to="/write">
            <li className="navlinks">Write</li>
          </Link>
          <Link to="/profile">
            <li className="navlinks">Profile</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
