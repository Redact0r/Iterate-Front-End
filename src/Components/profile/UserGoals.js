import React, { Component } from "react";
import DailyWritingGoal from "./DailyWritingGoal";

class UserGoals extends Component {
  render() {
    return (
      <div className="div-goals">
        <h3>My Goals</h3>
        <DailyWritingGoal
          handleDailyGoalSelector={this.props.handleDailyGoalSelector}
          selected={this.props.selected}
        />
      </div>
    );
  }
}

export default UserGoals;
