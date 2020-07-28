import React, { Component, createContext } from "react";
import IterateApi from "./fetch/IterateApi";
import TokenService from "../services/token-service";
import streakService from "../services/streak-service";

const UserContext = createContext({
  isLoggedIn: TokenService.hasAuthToken(),
  userid: null,
  works: [],
  wordCount: 0,
  animationClassName: "",
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
  handleSave: () => {},
  handleTitleChange: () => {},
  handleContentChange: () => {},
  handleDailyGoalSelector: () => {},
  handleKeypress: () => {},
  handleDayCheck: () => {},
  handleStartNew: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  handleAnimationKeypress: () => {},
  stopAnimate: () => {},
  generateWorks: () => {},
  handleLogging: () => {},
  setUserId: () => {},
  setStreak: () => {},
  setMessage: () => {},
  resetMessage: () => {},
  setStreakComplete: () => {},
});

export default UserContext;

export class UserContextProvider extends Component {
  state = {
    userid: null,
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
    message: "",
    isShow: false,
    streakComplete: false,

    handleDayCheck() {
      this.handleDayCheck.bind(this);
    },
    handleEdit() {
      this.handleEdit.bind(this);
    },
    generateWorks() {
      this.generateWorks.bind(this);
    },
    setStreak() {
      this.setStreak.bind(this);
    },
  };

  resetMessage = () => {
    this.setState({ message: "", isShow: false });
  };

  setMessage = (str) => {
    this.setState({ message: str, isShow: true });
  };

  setStreak = (streak) => {
    console.log("streak is", streak);
    this.setState({ streak });
  };

  setStreakComplete = (boolean) => {
    this.setState({ streakComplete: boolean });
  };

  setUserId = (userid) => {
    this.setState({ userid });
    localStorage.setItem("userid", userid);
  };
  handleEdit = (e, title, content, wordcount) => {
    let id = e.target.id.slice(9, e.target.id.length);
    this.setState({
      currentWorkId: id,
      boxTitle: title,
      boxContent: content,
      wordCount: wordcount,
    });
  };

  generateWorks = (works) => {
    this.setState({ works });
  };

  handleDelete(e) {
    let id = e.target.id.slice(8, e.target.id.length);
    IterateApi.delete(id);
  }

  handleDayCheck = (e) => {
    let day = e.target.value;
    let allDays = { ...this.state.daysChecked };
    if (allDays[day] === true) {
      allDays[day] = false;
    } else if (allDays[day] === false) {
      allDays[day] = true;
    }
    this.setState({
      daysChecked: allDays,
    });
  };

  handleKeypress = (event) => {
    let eventString = event.target.value;
    let liveWordCount = eventString.split(" ").length;
    this.setState({
      wordCount: liveWordCount,
    });
    //post and update streak via back-end
    if (
      this.state.wordCount >= this.state.DailyWritingGoal &&
      !this.state.streakComplete
    ) {
      let novelCount = 80000 / this.state.DailyWritingGoal;
      let str = `Congrats! If you wrote like this every day, you would finish a novel
      in ${novelCount} days!`;
      this.setMessage(str);
      this.setStreakComplete(true);

      streakService.postStreak(this.state.userid).then((res) => {
        this.setStreak(res.returnStreak);
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

  handleLogging = () => {
    this.setState({ isLoggedIn: TokenService.hasAuthToken() });
  };

  handleTitleChange = (event) => {
    this.setState({
      boxTitle: event.target.value,
    });
  };

  handleSave = (event) => {
    event.preventDefault();
    if (this.state.currentWorkId === null) {
      const newWorks = {
        title: this.state.boxTitle,
        content: this.state.boxContent,
        wordcount: this.state.wordCount,
        user_id: this.state.userid || localStorage.getItem("userid"),
      };
      return IterateApi.post(newWorks);
    }
    if (this.state.currentWorkdId !== null) {
      let id = this.state.currentWorkId;
      const updatedObj = {
        title: this.state.boxTitle,
        content: this.state.boxContent,
        wordcount: this.state.wordCount,
        user_id: this.state.userid || localStorage.getItem("userid"),
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
    const value = {
      isLoggedIn: this.state.isLoggedIn,
      userid: this.state.userid || localStorage.getItem("userid"),
      works: this.state.works,
      wordCount: this.state.wordCount,
      DailyWritingGoal: this.state.DailyWritingGoal,
      streak: this.state.streak,
      boxTitle: this.state.boxTitle,
      boxContent: this.state.boxContent,
      daysChecked: this.state.daysChecked,
      goalSelector: this.state.goalSelector,
      currentWorkId: this.state.currentWorkId,
      message: this.state.message,
      isShow: this.state.isShow,
      streakComplete: this.state.streakComplete,
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
      generateWorks: this.generateWorks,
      handleLogging: this.handleLogging,
      setUserId: this.setUserId,
      setStreak: this.setStreak,
      setMessage: this.setMessage,
      resetMessage: this.resetMessage,
      setStreakComplete: this.setStreakComplete,
    };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
