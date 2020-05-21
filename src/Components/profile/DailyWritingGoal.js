import React, { Component } from "react";

export default class DailyWritingGoal extends Component {
  render() {
    return (
      <div className="div-dailywritinggoal">
        <label htmlFor="daily-goal-selector">Daily Goal: </label>
        <select
          className="select-goal"
          id="daily-goal-selector"
          onChange={this.props.handleDailyGoalSelector}
        >
          <option
            id="Hemingway"
            value="0500 Hemingway"
            selected={this.props.selected.Hemingway}
          >
            Hemingway - 500 Words
          </option>
          <option
            id="Ballard"
            value="1000 Ballard"
            selected={this.props.selected.Ballard}
          >
            Ballard - 1000 Words
          </option>
          <option
            id="King"
            value="2000 King"
            selected={this.props.selected.King}
          >
            Stephen King - 2000 Words
          </option>
          <option id="Fox" value="5000 Fox" selected={this.props.selected.Fox}>
            Chris Fox - 5000 Words
          </option>
        </select>
      </div>
    );
  }
}
