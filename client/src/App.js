import React from 'react'
import './App.css';
import WelcomePage from "./Components/WelcomePage/WelcomePage"
import NavBar from './Components/NavBar/NavBar.jsx'
import Dashboard from './Components/Dashboard/Dashboard'
import Journal from './Components/Journal/Journal'
import Calendar from './Components/Calendar/Calendar'
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return ( 
    <div className="App">
      {/* <NavBar /> */}
      {/* <Switch> */}
      {/* <Route exact path="/test" component={Test} /> */}
     
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/journal' component={Journal} />
      {/* </Switch> */}
      {/* <Route exact path='/calendar' component={Calendar} /> */}
    </div>
  );
}

export default App;
