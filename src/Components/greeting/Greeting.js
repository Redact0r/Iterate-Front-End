import React, { Component } from "react";

class Greeting extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <h3>User Greeting.</h3>;
    } else {
      return <h3>Guest Greeting.</h3>;
    }
  }
}

export default Greeting;
