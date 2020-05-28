import React, { useContext, useState } from "react";
import UserContext from "../UserContext";

export const DailyWritingGoal = () => {
  const context = useContext(UserContext);

  // const handleDailyGoalSelector = (event) => {
  //   let authorName = event.target.value.slice(5, event.target.value.length);
  //   let getWordCount = event.target.value.slice(0, 4);
  //   let goalWordCount = parseInt(getWordCount, 10);
  //   let currentGoalState = { ...goalSelector };
  //   let goalSelectorKeys = Object.keys(currentGoalState);
  //   for (let i = 0; i < goalSelectorKeys.length; i++) {
  //     if (authorName == goalSelectorKeys[i]) {
  //       currentGoalState[`${goalSelectorKeys[i]}`] = true;
  //     } else {
  //       currentGoalState[`${goalSelectorKeys[i]}`] = false;
  //     }
  //   }
  //   console.log(store);
  //   setStore({
  //     currentGoalState,
  //   });
  //   setDailyWritingGoal({ goalWordCount });
  // };

  return (
    <div className="div-dailywritinggoal">
      <label htmlFor="daily-goal-selector">Daily Goal: </label>
      <select
        className="select-goal"
        id="daily-goal-selector"
        onChange={(e) => {
          e.target.selected = true;
          context[0].DailyWritingGoal = e.target.value;
          console.log(context[0]);
        }}
      >
        <option id="Hemingway" value="500" name="Hemingway" selected={false}>
          Hemingway - 500 Words
        </option>
        <option id="Ballard" value="1000" name="Ballard" selected={false}>
          Ballard - 1000 Words
        </option>
        <option id="King" value="2000" name="King" selected={false}>
          Stephen King - 2000 Words
        </option>
        <option id="Fox" value="5000" name="Fox" selected={false}>
          Chris Fox - 5000 Words
        </option>
      </select>
    </div>
  );
};

export default DailyWritingGoal;
