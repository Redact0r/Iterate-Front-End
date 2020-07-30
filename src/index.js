import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./Context/UserContext";

ReactDOM.render(
  <Router>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Router>,
  document.getElementById("root")
);
