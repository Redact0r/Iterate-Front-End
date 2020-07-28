import React, { Component } from "react";
import UserContext from "./Components/UserContext";

class Message extends Component {
  static contextType = UserContext;
  handleClick(e) {
    e.preventDefault();
    this.context.resetMessage();
  }

  renderMessage() {
    return (
      <div className="message">
        <p>flavicon</p>
        <p>{this.context.message}</p>
        <button className="msg-btn" onClick={(e) => this.handleClick(e)}>
          X
        </button>
      </div>
    );
  }

  renderBlank() {
    return <></>;
  }

  render() {
    return (
      <div className="message-container">
        {this.context.isShow ? this.renderMessage() : this.renderBlank()}
      </div>
    );
  }
}
export default Message;
