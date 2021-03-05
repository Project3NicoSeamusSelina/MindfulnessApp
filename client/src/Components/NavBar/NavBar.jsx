import { logout } from '../../services/auth'
import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class NavBar extends Component {
    handleLogout = () => {
      logout().then(() => {
        this.props.setUser(null)
      })
    }
  render() {
    return (
      <div>
        <Link to="/journal">Journal</Link>
        <Link to="/routine">Daily Routine</Link>
        <Link to="/moodtracker">Mood Tracker</Link>
        <Link to="/logout" onClick={() => this.handleLogout()}>Logout</Link>
      </div>
    )
  }
}
