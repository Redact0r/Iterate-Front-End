import React, { Component } from "react";
import UserContext from "../UserContext";

export default class WritingCalendar extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div className="div-writingcalendar">
        {this.dayArray}
        <label htmlFor="user-writing-days">I Write On:</label>
        <form id="user-writing-days">
          <label htmlFor="M">
            Monday
            <input
              type="checkbox"
              id="M"
              value="M"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.M}
            />
          </label>
          <label htmlFor="T">
            Tuesday
            <input
              type="checkbox"
              id="T"
              value="T"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.T}
            />
          </label>
          <label htmlFor="W">
            Wednesday
            <input
              type="checkbox"
              id="W"
              value="W"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.W}
            />
          </label>
          <label htmlFor="R">
            Thursday
            <input
              type="checkbox"
              id="R"
              value="R"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.R}
            />
          </label>
          <label htmlFor="F">
            Friday
            <input
              type="checkbox"
              id="F"
              value="F"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.F}
            />
          </label>
          <label htmlFor="S">
            Saturday
            <input
              type="checkbox"
              id="S"
              value="S"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.S}
            />
          </label>
          <label
            htmlFor="U"
            onChange={this.context.handleDayCheck}
            checked={this.context.daysChecked.U}
          >
            Sunday
            <input type="checkbox" id="U" value="U" />
          </label>
        </form>
      </div>
    );
  }
}
