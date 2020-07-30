import React, { Component } from "react";
import UserContext from "../../Context/UserContext";
import favicon from "../../Assets/Icons/favicon-32x32.png";
import "./Message.css";

class Message extends Component {
  static contextType = UserContext;
  handleClick(e) {
    e.preventDefault();
    this.context.resetMessage();
  }

  renderMessage() {
    return (
      <div className="message">
        <img src={favicon} alt="writing hand favicon" />
        <p>{this.context.message}</p>
        <button className="msg-btn" onClick={(e) => this.handleClick(e)}>
          Okay!
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
