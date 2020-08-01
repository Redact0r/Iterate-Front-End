import React, { Component } from "react";
import AuthApiService from "../../services/auth-service";
import UserContext from "../../Context/UserContext";

class Signup extends Component {
  static contextType = UserContext;
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  state = { message: "", password: "", confirmPass: "", passwordsMatch: false };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/login");
  };

  handleInitialPassword = (ev) => {
    ev.preventDefault();
    let password = ev.target.value;
    this.setState({ password });
    password === this.state.confirmPass
      ? this.setState({ message: "", passwordsMatch: true })
      : this.setState({
          message: "Passwords do not match",
          passwordsMatch: false,
        });
  };

  handlePasswordMatch = (ev) => {
    ev.preventDefault();
    let confirmPass = ev.target.value;
    this.setState({});
    confirmPass === this.state.password
      ? this.setState({ message: "", passwordsMatch: true })
      : this.setState({
          message: "Passwords do not match",
          passwordsMatch: false,
        });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const {
      signup_fullname,
      signup_nickname,
      signup_username,
      signup_password,
    } = ev.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: signup_username.value,
      password: signup_password.value,
      full_name: signup_fullname.value,
      nickname: signup_nickname.value,
    })
      .then((user) => {
        signup_fullname.value = "";
        signup_nickname.value = "";
        signup_username.value = "";
        signup_password.value = "";
        this.handleRegistrationSuccess();
      })
      .catch((res) => {
        this.context.setMessage(res.error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)} className="signup-form">
          <label htmlFor="signup_username">Username</label>
          <input
            id="signup_username"
            type="text"
            className="user signup username"
            placeholder="Username"
          />
          <label htmlFor="signup_fullname">Full Name</label>
          <input
            id="signup_fullname"
            type="text"
            className="user login name"
            placeholder="Full Name"
          />
          <label htmlFor="signup_nickname">Nickname</label>
          <input
            id="signup_nickname"
            type="text"
            className="user signup nickname"
            placeholder="Nickname"
          />
          <label htmlFor="password">Password</label>
          <input
            id="signup_password"
            name="password"
            type="password"
            className="user signup pass"
            placeholder="Password"
            onChange={(ev) => this.handleInitialPassword(ev)}
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm_password"
            name="confirm"
            type="password"
            className="user signup confirm pass"
            placeholder="Confirm Password"
            onChange={(ev) => this.handlePasswordMatch(ev)}
          />
          {this.state.message}
          <p>
            Passwords must be at least 8 letters, contain one uppercase letter,
            special character, and number
          </p>
          <button
            className="signup-btn"
            type="submit"
            disabled={!this.state.passwordsMatch}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
