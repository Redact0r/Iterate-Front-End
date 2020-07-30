import React, { Component } from "react";
import UserContext from "../../Context/UserContext";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Greeting.css";

class Greeting extends Component {
  static contextType = UserContext;

  state = {
    showHowItWorks: false,
  };

  handleHowItWorks(e) {
    e.preventDefault();
    this.setState({ showHowItWorks: !this.state.showHowItWorks });
  }
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
          <input
            type="button"
            className="started-btn"
            value="How It Works"
            onClick={(e) => this.handleHowItWorks(e)}
          />
          <div
            className="how-it-works"
            style={{ display: this.state.showHowItWorks ? "block" : "none" }}
          >
            <p>
              Go to settings and select your goal. Each day you meet your goal,
              you get a streak! If you miss a day, you lose your streak. You can
              only gain one streak per day.
            </p>
            <p>Happy Writing!</p>
          </div>
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
          <input
            type="button"
            className="started-btn"
            value="How It Works"
            onClick={(e) => this.handleHowItWorks(e)}
          />
          <div
            className="how-it-works"
            style={{ display: this.state.showHowItWorks ? "block" : "none" }}
          >
            <p>
              Go to settings and select your goal. Each day you meet your goal,
              you get a streak! If you miss a day, you lose your streak. You can
              only gain one streak per day.
            </p>
            <p>Happy Writing!</p>
          </div>
          <div className="demo-div">
            <p>Try our Demo Account!</p>
            <p>Username: mistertest</p>
            <p>Password: pass</p>
          </div>
        </div>
      );
    }
  }
}

export default Greeting;
