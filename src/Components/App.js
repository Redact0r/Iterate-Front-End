import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Greeting from "./greeting/Greeting";
import Write from "./write/Write";
import Profile from "./profile/Profile";
import "./App.css";
import Login from "./Login";
import IterateApi from "./fetch/IterateApi";
import UserContext from "./UserContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      wordCount: 0,
      DailyWritingGoal: 500,
      streak: 0,
      boxTitle: "",
      boxContent: "",
      daysChecked: {
        M: false,
        T: false,
        W: false,
        R: false,
        F: false,
        S: false,
        U: false,
      },
      goalSelector: {
        Hemingway: true,
        Ballard: false,
        King: false,
        Fox: false,
      },
    };
    this.handleDayCheck = this.handleDayCheck.bind(this);
  }

  handleDayCheck(e) {
    let day = e.target.value;
    let allDays = { ...this.state.daysChecked };
    if (allDays[day] === true) {
      allDays[day] = false;
    } else if (allDays[day] === false) {
      allDays[day] = true;
    }
    console.log(allDays);
    this.setState({
      daysChecked: allDays,
    });
  }

  handleKeypress = (event) => {
    let eventString = event.target.value;
    let liveWordCount = eventString.split(" ").length;
    this.setState({
      wordCount: liveWordCount,
    });
    if (this.state.wordCount === this.state.DailyWritingGoal) {
      this.setState({
        streak: +1,
      });
    }
  };

  handleDailyGoalSelector = (event) => {
    let authorName = event.target.value.slice(5, event.target.value.length);
    let getWordCount = event.target.value.slice(0, 4);
    let goalWordCount = parseInt(getWordCount, 10);
    let currentGoalState = { ...this.state.goalSelector };
    let goalSelectorKeys = Object.keys(currentGoalState);
    for (let i = 0; i < goalSelectorKeys.length; i++) {
      if (authorName == goalSelectorKeys[i]) {
        currentGoalState[`${goalSelectorKeys[i]}`] = true;
      } else {
        currentGoalState[`${goalSelectorKeys[i]}`] = false;
      }
    }
    this.setState({
      DailyWritingGoal: goalWordCount,
      goalSelector: currentGoalState,
    });
  };

  handleContentChange = (event) => {
    this.setState({
      boxContent: event.target.value,
    });
  };

  handleTitleChange = (event) => {
    this.setState({
      boxTitle: event.target.value,
    });
  };

  handleStartNew = (event) => {
    event.preventDefault();
    const newWorks = {
      title: this.state.boxTitle,
      content: this.state.boxContent,
      wordCount: this.state.wordCount,
    };
    IterateApi.post(newWorks);
    console.log(newWorks);
  };

  render() {
    return (
      <UserContext.Provider>
        <Router>
          <Nav />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Greeting isLoggedIn={this.state.isLoggedIn} />
              )}
            />
            <Route
              path="/write"
              render={(props) => (
                <Write
                  handleTitleChange={this.handleTitleChange}
                  handleStartNew={this.handleStartNew}
                  handleContentChange={this.handleContentChange}
                  wordCount={this.state.wordCount}
                  DailyWritingGoal={this.state.DailyWritingGoal}
                  handleKeypress={this.handleKeypress}
                  streak={this.state.streak}
                  NovelWordCount={this.state.NovelWordCount}
                />
              )}
            />
            <Route
              path="/profile"
              exact
              render={(props) => (
                <Profile
                  handleDayCheck={this.handleDayCheck}
                  daysChecked={this.state.daysChecked}
                  handleDailyGoalSelector={this.handleDailyGoalSelector}
                  isLoggedIn={this.state.isLoggedIn}
                  DailyWritingGoal={this.state.DailyWritingGoal}
                  handleWorksClick={this.handleWorksClick}
                  selected={this.state.goalSelector}
                />
              )}
            />
            <Route
              path="/login"
              exact
              render={(props) => <Login isLoggedIn={this.state.isLoggedIn} />}
            />
          </Switch>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
