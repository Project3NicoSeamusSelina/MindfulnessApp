
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import { BrowserRouter, Route, Link } from "react-router-dom";


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        You are on the dashboard
      </div>
    )
  }
}
