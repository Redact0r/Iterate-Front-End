import React, { Component } from "react";
import "./Write.css";
import UserContext from "../UserContext";

class Write extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className="div-write">
        <h2>Write.</h2>
        <div className="div-write-text">
          <form className="form-writing-box" id="form-write-box">
            <input
              type="text"
              placeholder="Title"
              id="box-title"
              value={this.context.boxTitle}
              onChange={(e) => {
                this.context.handleTitleChange(e);
              }}
            />
            <textarea
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
            <div className="div-write-text-tracker">
              {`Count: ${this.context.wordCount} | Goals: ${this.context.DailyWritingGoal} | Streak: ${this.context.streak}`}
            </div>
            <div className="btn-div">
              <input
                type="submit"
                value="Save"
                className="writing-btn"
                onClick={(e) => {
                  this.context.handleSave(e);
                }}
              />
              <input
                type="button"
                value="Start New"
                className="writing-btn"
                onClick={(e) => {
                  this.context.handleStartNew(e);
                }}
              />
            </div>
          </form>
          <div className="div-animation">
            <img
              src="https://i.ya-webdesign.com/images/black-pen-png-6.png"
              alt="jumping pen"
              id="pen"
              width="100px"
              className={this.context.animationClassName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Write;
