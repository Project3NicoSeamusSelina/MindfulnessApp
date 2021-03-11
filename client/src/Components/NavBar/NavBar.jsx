import { logout } from '../../services/auth'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

export default class NavBar extends Component {

    handleLogout = () => {
      logout()
      .then( () => {
        this.props.setUser(null)
       
      }) 
    }

  render() {
    if(!this.props.user) {
        return (<Redirect to="/" />)
    }
    else {
    return (
      
      <div>
        <Link to="/journal">Journal</Link>
        <Link to="/routine">Daily Routine</Link>
        <Link to="/moodtracker">Mood Tracker</Link>
        <Link to="/visionboard">Vision Board</Link>
        <Link to="/logout" onClick={() => this.handleLogout()}>Logout</Link>
      </div>
      
    )
  }
  }
}
