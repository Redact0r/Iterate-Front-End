import React, { Component, useState, createContext } from "react";

const UserContext = createContext({
  isLoggedIn: true,
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
});

export default UserContext;
