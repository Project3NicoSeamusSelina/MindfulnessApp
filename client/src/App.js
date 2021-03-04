import React from 'react'
import './App.css';
import WelcomePage from "./Components/WelcomePage/WelcomePage"
import NavBar from './Components/NavBar/NavBar.jsx'
import Dashboard from './Components/Dashboard/Dashboard'
import Journal from './Components/Journal/Journal'
import Calendar from './Components/Calendar/Calendar'
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return ( 
    <div className="App">
      {/* <NavBar /> */}
      <WelcomePage />
      <Button>Testing</Button>
      <Calendar />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/journal' component={Journal} />
      {/* <Route exact path='/calendar' component={Calendar} /> */}
    </div>
  );
}

export default App;
