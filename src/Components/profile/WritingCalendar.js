import React, { Component } from "react";

export default class WritingCalendar extends Component {
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
              onChange={this.props.handleDayCheck}
              checked={this.props.daysChecked.M}
            />
          </label>
          <label htmlFor="T">
            Tuesday
            <input
              type="checkbox"
              id="T"
              value="T"
              onChange={this.props.handleDayCheck}
              checked={this.props.daysChecked.T}
            />
          </label>
          <label htmlFor="W">
            Wednesday
            <input
              type="checkbox"
              id="W"
              value="W"
              onChange={this.props.handleDayCheck}
              checked={this.props.daysChecked.W}
            />
          </label>
          <label htmlFor="R">
            Thursday
            <input
              type="checkbox"
              id="R"
              value="R"
              onChange={this.props.handleDayCheck}
              checked={this.props.daysChecked.R}
            />
          </label>
          <label htmlFor="F">
            Friday
            <input
              type="checkbox"
              id="F"
              value="F"
              onChange={this.props.handleDayCheck}
              checked={this.props.daysChecked.F}
            />
          </label>
          <label htmlFor="S">
            Saturday
            <input
              type="checkbox"
              id="S"
              value="S"
              onChange={this.props.handleDayCheck}
              checked={this.props.daysChecked.S}
            />
          </label>
          <label
            htmlFor="U"
            onChange={this.props.handleDayCheck}
            checked={this.props.daysChecked.U}
          >
            Sunday
            <input type="checkbox" id="U" value="U" />
          </label>
        </form>
      </div>
    );
  }
}
