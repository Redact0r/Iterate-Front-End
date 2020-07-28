import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import PrivateRoute from "../Components/Routes/PrivateRoute";
import PublicRoute from "../Components/Routes/PublicRoute";
import Greeting from "./greeting/Greeting";
import Write from "./write/Write";
import Profile from "./profile/Profile";
import "./App.css";
import Login from "./Login/Login";
import UserContext from "./UserContext";
import Signup from "./Login/Signup";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-service";
import IdleService from "../services/idle-service";
import IterateApi from "../Components/fetch/IterateApi";
import streakService from "../services/streak-service";
import Message from "../Message";

class App extends Component {
  static contextType = UserContext;

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
      streakService.checkStreak(this.context.userid).then((res) => {
        <Message message={res.message} isShow={true} /> &&
          this.context.setStreak(res.currentStreak);
      });
    }
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();

    this.forceUpdate();
  };

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Greeting} />
          <PrivateRoute path="/write" component={Write} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <PublicRoute path="/login" exact component={Login} />
          <PublicRoute path="/signup" exact component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
