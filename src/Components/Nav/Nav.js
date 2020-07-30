import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import UserContext from "../../Context/UserContext";

class Nav extends Component {
  static contextType = UserContext;
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.context.handleLogging();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link className=".navlinks" onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link className=".navlinks" to="/login">
          Login
        </Link>
      </div>
    );
  }
  render() {
    return (
      <nav className="nav">
        <Link to="/">
          <h3 className="navh3">Iterate.</h3>
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        <Link className=".navlinks" to="/write">
          Write
        </Link>
        <Link className=".navlinks" to="/profile">
          Profile
        </Link>
      </nav>
    );
  }
}

export default Nav;
