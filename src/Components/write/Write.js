import React, { Component } from "react";
import "./Write.css";
import Rewards from "./Rewards";

class Write extends Component {
  render() {
    return (
      <div className="div-write">
        <h2>Write.</h2>
        <div className="div-write-text">
          <form className="form-writing-box" id="form-write-box">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => {
                this.props.handleTitleChange(e);
              }}
            />
            <input
              type="text"
              placeholder="Start writing."
              className="box write"
              id="writing-box"
              onChange={(e) => {
                this.props.handleKeypress(e);
                this.props.handleContentChange(e);
              }}
            />
            <input
              type="submit"
              value="Save"
              onClick={(e) => {
                this.props.handleSave(e);
              }}
            />
          </form>
          <div className="div-write-text-tracker">
            {`Count: ${this.props.wordCount} | Goals: ${this.props.DailyWritingGoal} | Streak: ${this.props.streak}`}
            <Rewards streak={this.props.streak} />
          </div>
        </div>
      </div>
    );
  }
}

export default Write;
