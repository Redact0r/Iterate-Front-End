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

  handleLoginSuccess = async () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
    this.context.handleLogging();
    const userid =
      this.context.userid || (await localStorage.getItem("userid"));
    streakService
      .checkStreak(userid)
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
        streakService.getStreak(userid).then((res) => {
          this.context.setStreak(res.currentStreak);
        })
      );
  };

  handleSubmitJwtAuth = async (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    await AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(async (res) => {
        user_name.value = "";
        password.value = "";
        await this.context.setUserId(res.userid);
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
