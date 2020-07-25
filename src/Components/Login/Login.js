import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthApiService from "../../services/auth-service";
import UserContext from "../UserContext";
import IterateApi from "../fetch/IterateApi";
import "./Login.css";

class Login extends Component {
  static contextType = UserContext;
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };
  state = { error: null };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
    this.context.handleLogging();
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        this.context.setUserId(res.userid);
        this.handleLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div>
        <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
          <label htmlFor="signup_username">Username</label>
          <input
            id="user_name"
            type="text"
            className="user login name"
            placeholder="Username"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="user login pass"
            placeholder="Password"
          />
          <button className="login-btn" type="submit">
            Log In
          </button>
        </form>
        <Link to="/signup">
          <p>Not a member? Sign up!</p>
        </Link>
      </div>
    );
  }
}

export default Login;
