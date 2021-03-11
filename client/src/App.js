import React from 'react'
import './App.css';

import WelcomePage from "./Components/WelcomePage/WelcomePage"
import NavBar from './Components/NavBar/NavBar.jsx'
import Dashboard from './Components/Dashboard/Dashboard'
import Journal from './Components/Journal/Journal'
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Authentication/Login'
import Signup from './Components/Authentication/Signup';
import ToDoList from "./Components/ToDoList/ToDoList";
import VisionBoard from "./Components/Vision Board/VisionBoard"




class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
  
    return (
      <div className="App">
        <NavBar user={this.state.user} setUser={this.setUser} />
        {/* <Route 
        exact path='/navbar'
        user={this.state.user} 
        setUser={this.setUser} /> */}

        <Route
          exact path='/'
          render={props => {
            if (this.state.user) {
              return <Login {...props}
              user={this.state.user}
              setUser={this.setUser}
              />
            } else return <Redirect to='/login' />
          }}
        />

        
            {/* <Route
            exact path='/rewards'
            render={props => {
              if (this.state.user) return (
                <Rewards
                  {...props}
                  user={this.state.user}
                  setUser={this.setUser}
                // toggleFavoriteReward={this.toggleFavoriteReward}
                />)
              else return (<Redirect to='/' />)
            }}
          /> */}


        <Route
          exact path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />
        <Route exact path='/welcomepage' component={WelcomePage} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/journal' component={Journal} user={this.state.user} />
        <Route exact path='/routine' component={ToDoList} user={this.state.user} />
        <Route exact path='/visionboard' component={VisionBoard} />
        
        {/* <Route exact path='/routine' component={TodoItems} /> */}

        {/* <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} /> */}

      </div>
    );
  }

}

export default App;




