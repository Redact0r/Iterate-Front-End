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
      works: [],
      wordCount: 0,
      DailyWritingGoal: 500,
      streak: 0,
      currentWorkId: null,
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
      animationClassName: "",
    };
    this.handleDayCheck = this.handleDayCheck.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    IterateApi.get().then((data) => {
      this.setState({
        works: data,
      });
    });
  }

  //API Calls
  handleEdit(e, title, content, wordcount) {
    let id = e.target.id.slice(9, e.target.id.length);
    this.setState({
      currentWorkId: id,
      boxTitle: title,
      boxContent: content,
      wordCount: wordcount,
    });
  }

  handleDelete(e) {
    let id = e.target.id.slice(8, e.target.id.length);
    IterateApi.delete(id);
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
    if (this.state.wordCount >= this.state.DailyWritingGoal) {
      this.setState({
        streak: +1,
      });
    }
    this.handleAnimationKeypress(event);
    this.stopAnimate();
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

  handleSave = (event) => {
    event.preventDefault();
    if (this.state.currentWorkId == null) {
      const newWorks = {
        title: this.state.boxTitle,
        content: this.state.boxContent,
        wordcount: this.state.wordCount,
      };
      return IterateApi.post(newWorks);
    }
    if (this.state.currentWorkdId !== null) {
      let id = this.state.currentWorkId;
      const updatedObj = {
        title: this.state.boxTitle,
        content: this.state.boxContent,
        wordcount: this.state.wordCount,
      };
      IterateApi.patch(id, updatedObj);
    }
  };

  handleStartNew = (event) => {
    this.handleSave(event);
    this.setState({
      boxTitle: "",
      boxContent: "",
      wordCount: 0,
      currentWorkId: null,
    });
  };

  handleAnimationKeypress = (event) => {
    this.setState({
      animationClassName: "animate",
    });
  };

  stopAnimate = () => {
    setTimeout(() => {
      this.setState({
        animationClassName: "",
      });
    }, 4000);
  };

  render() {
    const contextValues = {
      isLoggedIn: this.state.isLoggedIn,
      works: this.state.works,
      wordCount: this.state.wordCount,
      DailyWritingGoal: this.state.DailyWritingGoal,
      streak: this.state.streak,
      boxTitle: this.state.boxTitle,
      boxContent: this.state.boxContent,
      daysChecked: this.state.daysChecked,
      goalSelector: this.state.goalSelector,
      currentWorkId: this.state.currentWorkId,
      handleSave: this.handleSave,
      handleTitleChange: this.handleTitleChange,
      handleContentChange: this.handleContentChange,
      handleDailyGoalSelector: this.handleDailyGoalSelector,
      handleKeypress: this.handleKeypress,
      handleDayCheck: this.handleDayCheck,
      handleStartNew: this.handleStartNew,
      handleDelete: this.handleDelete,
      handleEdit: this.handleEdit,
      handleAnimationKeypress: this.handleAnimationKeypress,
      animationClassName: this.state.animationClassName,
      stopAnimate: this.stopAnimate,
    };

    return (
      <UserContext.Provider value={contextValues}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={(props) => <Greeting />} />
            <Route path="/write" render={(props) => <Write />} />
            <Route path="/profile" exact render={(props) => <Profile />} />
            <Route path="/login" exact render={(props) => <Login />} />
          </Switch>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
