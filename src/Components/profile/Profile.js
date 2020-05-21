import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserWorks from "./UserWorksList";
import UserGoals from "./UserGoals";
import "./Profile.css";

class Profile extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className="div-profile">
          <h2>My Profile.</h2>
          <UserGoals
            handleDailyGoalSelector={this.props.handleDailyGoalSelector}
            DailyWritingGoal={this.props.DailyWritingGoal}
            handleDayCheck={this.props.handleDayCheck}
            daysChecked={this.props.daysChecked}
            selected={this.props.selected}
          />
          <UserWorks handleWorksClick={this.props.handleWorksClick} />
        </div>
      );
    } else {
      return (
        <h3>
          Please <Link to="/login">login</Link> to use view this page.
        </h3>
      );
    }
  }
}
export default Profile;
