import React, { useState, useContext, useReducer } from "react";
import UserContext from "../UserContext";

const WritingCalendar = () => {
  const context = useContext(UserContext);

  // const handleDayCheck = (e) => {
  //   console.log(e.target.checked);
  //   let day = e.target.value;
  //   let allDays = { ...store.daysChecked };
  //   // if (allDays[day] === true) {
  //   //   allDays[day] = false;
  //   // } else if (allDays[day] === false) {
  //   //   allDays[day] = true;
  //   // }
  //   allDays[day] = e.target.checked;
  //   console.log(allDays);
  //   console.log(store);
  //   setStore({store});
  // };

  return (
    <div className="div-writingcalendar">
      <label htmlFor="user-writing-days">I Write On:</label>
      <form id="user-writing-days">
        <label htmlFor="M">
          Monday
          <input
            type="checkbox"
            id="M"
            value="M"
            onChange={(e) =>
              (context.daysChecked[e.target.value] = !context.daysChecked[
                e.target.value
              ])
            }
            checked={context.daysChecked.M.value}
          />
        </label>
        <label htmlFor="T">
          Tuesday
          <input
            type="checkbox"
            id="T"
            value="T"
            onChange={(e) =>
              (context.daysChecked[e.target.value] = !context.daysChecked[
                e.target.value
              ])
            }
            checked={context.daysChecked.T.value}
          />
        </label>
        <label htmlFor="W">
          Wednesday
          <input
            type="checkbox"
            id="W"
            value="W"
            onChange={(e) =>
              (context.daysChecked[e.target.value] = !context.daysChecked[
                e.target.value
              ])
            }
            checked={context.daysChecked.W.value}
          />
        </label>
        <label htmlFor="R">
          Thursday
          <input
            type="checkbox"
            id="R"
            value="R"
            onChange={(e) =>
              (context.daysChecked[e.target.value] = !context.daysChecked[
                e.target.value
              ])
            }
            checked={context.daysChecked.R.value}
          />
        </label>
        <label htmlFor="F">
          Friday
          <input
            type="checkbox"
            id="F"
            value="F"
            onChange={(e) =>
              (context.daysChecked[e.target.value] = !context.daysChecked[
                e.target.value
              ])
            }
            checked={context.daysChecked.F.value}
          />
        </label>
        <label htmlFor="S">
          Saturday
          <input
            type="checkbox"
            id="S"
            value="S"
            onChange={(e) =>
              (context.daysChecked[e.target.value] = !context.daysChecked[
                e.target.value
              ])
            }
            checked={context.daysChecked.S.value}
          />
        </label>
        <label htmlFor="U">
          Sunday
          <input
            type="checkbox"
            id="U"
            value="U"
            onChange={(e) =>
              (context.daysChecked[e.target.value] = !context.daysChecked[
                e.target.value
              ])
            }
            checked={context.daysChecked.U.value}
          />
        </label>
      </form>
    </div>
  );
};

export default WritingCalendar;
