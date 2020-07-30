import React, { Component } from "react";
import UserWorks from "./UserWorksList";
import UserGoals from "./UserGoals";
import UserContext from "../../Context/UserContext";
import "./Profile.css";

class Profile extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.context.generateWorks();
  }

  render() {
    return (
      <div className="div-profile">
        <h2>My Profile.</h2>
        <UserGoals />
        <UserWorks />
      </div>
    );
  }
}

export default Profile;
