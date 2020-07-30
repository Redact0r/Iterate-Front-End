import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-service";
import UserContext from "../../Context/UserContext";
import streakService from "../../services/streak-service";
import "./Login.css";

class Login extends Component {
  static contextType = UserContext;
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
    this.context.handleLogging();
    streakService
      .checkStreak(this.context.userid)
      .then((res) => {
        let lastStreakDate = new Date(res.lastLogin);
        let today = new Date();
        this.context.setMessage(res.message);
        if (lastStreakDate.getDate() === today.getDate()) {
          this.context.setStreakComplete(true);
        } else {
          this.context.setStreakComplete(false);
        }
      })
      .then(() =>
        streakService.getStreak(this.context.userid).then((res) => {
          this.context.setStreak(res.currentStreak);
        })
      );
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
        this.context.setMessage(res.error);
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
