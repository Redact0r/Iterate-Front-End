import React, { Component } from "react";
import AuthApiService from "../../services/auth-service";

class Signup extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/login");
  };

  state = { error: null };

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
        this.setState({ error: res.error });
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
            type="password"
            className="user signup pass"
            placeholder="Password"
          />
          <button className="signup-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
