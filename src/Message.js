import React, { Component } from "react";

class Message extends Component {
  state = {
    message: this.props.message,
  };

  render() {
    return (
      <div className="message">
        <p>flavicon</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Message;
