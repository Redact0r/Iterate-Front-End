import React, { Component } from "react";
import UserContext from "../UserContext";

export default class DailyWritingGoal extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div className="div-dailywritinggoal">
        <label htmlFor="daily-goal-selector">I want to write like... </label>
        <select
          className="select-goal"
          id="daily-goal-selector"
          onChange={this.context.handleDailyGoalSelector}
        >
          <option
            id="Hemingway"
            value="0500 Hemingway"
            selected={this.context.goalSelector.Hemingway}
          >
            Hemingway - 500 Words
          </option>
          <option
            id="Ballard"
            value="1000 Ballard"
            selected={this.context.goalSelector.Ballard}
          >
            Ballard - 1000 Words
          </option>
          <option
            id="King"
            value="2000 King"
            selected={this.context.goalSelector.King}
          >
            Stephen King - 2000 Words
          </option>
          <option
            id="Fox"
            value="5000 Fox"
            selected={this.context.goalSelector.Fox}
          >
            Chris Fox - 5000 Words
          </option>
        </select>
      </div>
    );
  }
}
