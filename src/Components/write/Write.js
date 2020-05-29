import React, { Component } from "react";
import "./Write.css";
import Rewards from "./Rewards";
import UserContext from "../UserContext";

class Write extends Component {
  static contextType = UserContext;

  render() {
    console.log(this.context);
    return (
      <div className="div-write">
        <h2>Write.</h2>
        <div className="div-write-text">
          <form className="form-writing-box" id="form-write-box">
            <input
              type="text"
              placeholder="Title"
              value={this.context.boxTitle}
              onChange={(e) => {
                this.context.handleTitleChange(e);
              }}
            />
            <input
              type="text"
              placeholder="Start writing."
              className="box write"
              id="writing-box"
              value={this.context.boxContent}
              onChange={(e) => {
                this.context.handleKeypress(e);
                this.context.handleContentChange(e);
              }}
            />
            <input
              type="submit"
              value="Save"
              onClick={(e) => {
                this.context.handleSave(e);
              }}
            />
            <input
              type="button"
              value="Start New"
              onClick={(e) => {
                this.context.handleStartNew(e);
              }}
            />
          </form>
          <div className="div-write-text-tracker">
            {`Count: ${this.context.wordCount} | Goals: ${this.context.DailyWritingGoal} | Streak: ${this.context.streak}`}
            <Rewards streak={this.context.streak} />
          </div>
        </div>
      </div>
    );
  }
}

export default Write;
