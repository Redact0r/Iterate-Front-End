import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";
import Greeting from "../Greeting/Greeting";
import Write from "../Write/Write";
import Profile from "../Profile/Profile";
import "./App.css";
import Login from "../Login/Login";
import UserContext from "../../Context/UserContext";
import Signup from "../Signup/Signup";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-service";
import IdleService from "../../services/idle-service";
import Message from "../Message/Message";

class App extends Component {
  static contextType = UserContext;

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
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
        <Message />
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
