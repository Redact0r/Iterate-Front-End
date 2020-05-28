import React, { Component } from "react";
import DailyWritingGoal from "./DailyWritingGoal";
import WritingCalendar from "./WritingCalendar";

class UserGoals extends Component {
  render() {
    return (
      <div className="div-goals">
        <h3>My Goals</h3>
        <DailyWritingGoal
          handleDailyGoalSelector={this.props.handleDailyGoalSelector}
          selected={this.props.selected}
        />
        <WritingCalendar />
      </div>
    );
  }
}

export default UserGoals;
