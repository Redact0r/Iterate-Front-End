import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserWorks from "./UserWorksList";
import UserGoals from "./UserGoals";
import UserContext from "../UserContext";
import IterateApi from "../fetch/IterateApi";
import "./Profile.css";

class Profile extends Component {
  static contextType = UserContext;

  componentDidMount() {
    IterateApi.get(this.context.userid).then((data) =>
      this.context.generateWorks(data)
    );
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
