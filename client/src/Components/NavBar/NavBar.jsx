import { logout } from '../../services/auth'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

export default class NavBar extends Component {

  state = {
    loggedin: true,
  }


    handleLogout = () => {
      console.log('LOGGEDOUT')
      logout()
      this.setState({loggedIn: false})
      this.props.history.push('/login')
      .then(direction => {
        console.log(direction)
        //this.props.history.push('/login')
        this.props.setUser(null)
       
      })
     
    }
  render() {
    if(this.state.loggedIn === false) {
      return (<Redirect to="/login" />)
    }
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
