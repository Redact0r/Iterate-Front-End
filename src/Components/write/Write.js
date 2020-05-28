import React, { useState, useContext } from "react";
import "./Write.css";
import Rewards from "./Rewards";
import UserContext from "../UserContext";
import IterateApi from "../fetch/IterateApi";
import CountGoalsStreak from "./CountGoalsStreak";

const Write = () => {
  const context = useContext(UserContext);

  const handleKeypress = (e) => {
    context.boxContent = e.target.value;
    let eventString = e.target.value;
    let liveWordCount = eventString.split(" ").length;
    context.wordCount = liveWordCount;
    console.log(context.wordCount);
    if (context.wordCount === context.DailyWritingGoal) {
      context.streak++;
    }
  };

  const handleStartNew = (event) => {
    event.preventDefault();
    const newWorks = {
      title: context.boxTitle,
      content: context.boxContent,
      wordCount: context.wordCount,
    };
    IterateApi.post(newWorks);
    console.log(newWorks);
  };

  return (
    <div className="div-write">
      <h2>Write.</h2>
      <div className="div-write-text">
        <form className="form-writing-box" id="form-write-box">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => (context.boxTitle = e.target.value)}
          />
          <input
            type="text"
            placeholder="Start writing."
            className="box write"
            id="writing-box"
            onChange={(e) => handleKeypress(e)}
          />
          <input
            type="submit"
            value="Save"
            onClick={(e) => {
              handleStartNew(e);
            }}
          />
        </form>
        <CountGoalsStreak
          wordCount={context.wordCount}
          DailyWritingGoal={context.DailyWritingGoal}
          streak={context.streak}
        />
        <Rewards />
      </div>
    </div>
  );
};

export default Write;
