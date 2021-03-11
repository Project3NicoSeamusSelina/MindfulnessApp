import { logout } from '../../services/auth'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import './NavBar.css';


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
      
      <div className='logoNavBarContainer'>
          <div id='logoPosition'>
          <img id='logo'  src={'/images/Logo_schwarz.png'} />
          </div>
        <div className="container rounded-pill navBar d-flex justify-content-center">
          
        <Link className="pr-5 pt-2 pb-2 font-weight-bold navBarLink" to="/journal">Journal</Link>
        <Link className="pr-5 pt-2 pb-2 font-weight-bold navBarLink" to="/routine">Daily Routine</Link>
        <Link className="pr-5 pt-2 pb-2 font-weight-bold navBarLink" to="/dashboard">Dashboard</Link>
        {/* <Link className="p-2" to="/moodtracker">Mood Tracker</Link> */}
        {/* <Link to="/visionboard">Vision Board</Link> */}
        <Link className="pr-5 pt-2 pb-2 font-weight-bold navBarLink" to="/logout" onClick={() => this.handleLogout()}>Logout</Link>
        </div>
      </div>
    )
  }
  }
}
