import React, { Component } from "react";
import UserContext from "../../Context/UserContext";

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
          defaultValue={this.context.goalSelector}
        >
          <option id="Hemingway" value="0500 Hemingway">
            Hemingway - 500 Words
          </option>
          <option id="Ballard" value="1000 Ballard">
            Ballard - 1000 Words
          </option>
          <option id="King" value="2000 King">
            Stephen King - 2000 Words
          </option>
          <option id="Fox" value="5000 Fox">
            Chris Fox - 5000 Words
          </option>
        </select>
      </div>
    );
  }
}
