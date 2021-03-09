
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Entry from './Entry'
import { BrowserRouter, Route, Link } from "react-router-dom";
import MyCalendar from '../Calendar/Calendar1' 

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default class Journal extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <Calendar
        />
        <Entry/>
      </div>
    )
  }
}



// const Journal = (props) => {

//   console.log("props at Journal", props)
//   return (
//     <div>
//       <h1>Grützi from Felix</h1>
//     </div>
//   )
// }

// export default Journal