import React, { Component } from "react";

class Message extends Component {
  state = {
    message: this.props.message,
    isShow: this.props.isShow,
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({ isShow: false, message: "" });
  }

  renderMessage() {
    return (
      <div className="message">
        <p>flavicon</p>
        <p>{this.state.message}</p>
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
        {this.state.isShow ? this.renderMessage() : this.renderBlank()}
      </div>
    );
  }
}
export default Message;
