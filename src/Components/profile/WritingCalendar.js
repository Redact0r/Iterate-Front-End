import React, { Component } from "react";
import UserContext from "../UserContext";

export default class WritingCalendar extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div className="div-writingcalendar">
        {this.dayArray}
        <label htmlFor="user-writing-days"></label>
        <form id="user-writing-days">
          <label
            className={`${this.context.daysChecked.M} day-btn-label`}
            htmlFor="M"
          >
            Monday
            <input
              className="day-btn"
              type="checkbox"
              id="M"
              value="M"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.M}
            />
          </label>
          <label
            className={`${this.context.daysChecked.T} day-btn-label`}
            htmlFor="T"
          >
            Tuesday
            <input
              className="day-btn"
              type="checkbox"
              id="T"
              value="T"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.T}
            />
          </label>
          <label
            className={`${this.context.daysChecked.W} day-btn-label`}
            htmlFor="W"
          >
            Wednesday
            <input
              className="day-btn"
              type="checkbox"
              id="W"
              value="W"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.W}
            />
          </label>
          <label
            className={`${this.context.daysChecked.R} day-btn-label`}
            htmlFor="R"
          >
            Thursday
            <input
              className="day-btn"
              type="checkbox"
              id="R"
              value="R"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.R}
            />
          </label>
          <label
            className={`${this.context.daysChecked.F} day-btn-label`}
            htmlFor="F"
          >
            Friday
            <input
              className="day-btn"
              type="checkbox"
              id="F"
              value="F"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.F}
            />
          </label>
          <label
            className={`${this.context.daysChecked.S} day-btn-label`}
            htmlFor="S"
          >
            Saturday
            <input
              className="day-btn"
              type="checkbox"
              id="S"
              value="S"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.S}
            />
          </label>
          <label
            className={`${this.context.daysChecked.U} day-btn-label`}
            htmlFor="U"
          >
            Sunday
            <input
              className="day-btn"
              type="checkbox"
              id="U"
              value="U"
              onChange={this.context.handleDayCheck}
              checked={this.context.daysChecked.U}
            />
          </label>
        </form>
      </div>
    );
  }
}
