import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { signup } from "../../services/auth"
import 'bootstrap/dist/css/bootstrap.min.css';
import './authentication.css';

export default class Signup extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = event => {
    // console.log('handlechange')
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    // console.log('handlesubmit')
    event.preventDefault();
    const { username, password } = this.state;
    signup(username, password)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            username: '',
            password: ''
          })
        } else {
          // the response from the server is a user object -> signup was successful
          // we want to put the user object in the state of App.js
          console.log(user)
          this.props.setUser(user);
          this.props.history.push('/dashboard');
        }
      })
  }

  render() {
    
    return (
      <div className="container d-flex justify-content-center pt-5">
      <div id="theContainer" className="card shadow p-3 mb-5 bg-black rounded">
        <div className="container-lg mt-2 card-body">
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username"> </label>
          <input
          placeholder="Username"
          className ="usernameText form-control rounded-pill"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
            required
            autofocus
          />
          <label htmlFor="password"></label>
          <input
          placeholder="Password"
          className ="passwordText form-control rounded-pill pt-3"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
            required
            autofocus
          />
          <button className ="w-50 btn btn-lg mt-3 rounded-pill border" type="submit">Sign Up</button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
          </div>
        </div>
      </div>
    )
  }
}