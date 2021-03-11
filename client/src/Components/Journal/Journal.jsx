
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Entry from './Entry'
import { BrowserRouter, Route, Link } from "react-router-dom";
import moment from 'moment';
import CalendarSecond from '../CalendarSec/CalendarSecond';
import AddEntry from './AddEntry';
import axios from 'axios';

export default class Journal extends Component {
  
  state = {
    selectedDay: null,
  }

  getDates = (day) => {
    this.setState({
      selectedDay: day
    })
  }
  
  render() {
    
    return (
      <div>
        <CalendarSecond getDates={this.getDates} selectedDay={this.state.selectedDay} />
        <Entry selectedDay={this.state.selectedDay}/>
        <AddEntry />
        {/* <NavBar /> */} 
        {/* <Calendar setSelectedDate={this.setSelectedDate} currentDay={this.state.day}  currentMonth={this.state.month}/>  */}
        {/* <Calendar onDayClick={(e, day, month, year)=> this.onDayClick(e, day, month, year)}/>  */}
      </div>



    )
  }
}