
import React, { Component } from 'react'
// import { Route, Link } from 'react-router-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/journal">Journal</Link>
        <Link to="/routine">Daily Routine</Link>
        <Link to="/moodtracker">Mood Tracker</Link>
        <Link to="/logout">Logout</Link>
      </div>
    )
  }
}
