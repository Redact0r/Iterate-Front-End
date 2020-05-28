import React, { Component } from "react";

export default class CountGoalsStreak extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="div-write-text-tracker">
        <p>
          Count: {this.props.wordCount} | Goals: {this.props.DailyWritingGoal} |
          Streak: {this.props.streak}
        </p>
      </div>
    );
  }
}
