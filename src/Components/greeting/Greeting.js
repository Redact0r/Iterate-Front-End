import React, { Component } from "react";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Greeting.css";

class Greeting extends Component {
  static contextType = UserContext;
  render() {
    if (TokenService.hasAuthToken()) {
      return (
        <div className="div-greet">
          <p>
            "So you want to be a writer? Write all the time, they'll tell you...
            What do they never say? Go do interesting things."
            <i>~Ryan Holiday</i>
          </p>
          <Link to="/write">
            <input type="button" className="started-btn" value="Get Started" />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="div-greet">
          <p>
            "Truth is stranger than fiction, but it is because Fiction is
            obliged to stick to possibilities; Truth isn't." <i>~Mark Twain</i>
          </p>
          <Link to="/signup">
            <input type="button" className="started-btn" value="Sign Up" />
          </Link>
        </div>
      );
    }
  }
}

export default Greeting;
