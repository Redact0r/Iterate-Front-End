import React, { Component, useState, createContext } from "react";

const UserContext = createContext({
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
});

export default UserContext;

// export class UserContextProvider extends Component {
//   state = {
//     isLoggedIn: true,
//     wordCount: 0,
//     DailyWritingGoal: 500,
//     streak: 0,
//     boxTitle: "",
//     boxContent: "",
//     daysChecked: {
//       M: false,
//       T: false,
//       W: false,
//       R: false,
//       F: false,
//       S: false,
//       U: false,
//     },
//     goalSelector: {
//       Hemingway: true,
//       Ballard: false,
//       King: false,
//       Fox: false,
//     },
//   };

//   render() {
//     return (
//       <UserContext.Provider value={this.state}>
//         {this.props.children}
//       </UserContext.Provider>
//     );
//   }
// }
