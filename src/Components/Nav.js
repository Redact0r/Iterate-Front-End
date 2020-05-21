import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <h3 className="navh3">Iterate.</h3>
        <ul className="navlinks">
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/write">
            <li>Write</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
