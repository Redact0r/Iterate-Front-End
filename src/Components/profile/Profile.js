import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserWorks from "./UserWorksList";
import UserGoals from "./UserGoals";
import UserContext from "../UserContext";
import "./Profile.css";

class Profile extends Component {
  static contextType = UserContext;
  render() {
    if (this.context.isLoggedIn) {
      return (
        <div className="div-profile">
          <h2>My Profile.</h2>
          <UserGoals />
          <UserWorks />
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
