import React, { Component } from "react";
import UserContext from "../UserContext";

class Greeting extends Component {
  static contextType = UserContext;
  render() {
    if (this.context.isLoggedIn) {
      return <h3>User Greeting.</h3>;
    } else {
      return <h3>Guest Greeting.</h3>;
    }
  }
}

export default Greeting;
