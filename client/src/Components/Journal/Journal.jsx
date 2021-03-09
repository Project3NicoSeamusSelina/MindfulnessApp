
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Entry from './Entry'
import { BrowserRouter, Route, Link } from "react-router-dom";
import moment from 'moment';
import CalendarSecond from '../CalendarSec/CalendarSec'

export default class Journal extends Component {
  // onDayClick=(e, day, month, year)=> {
  //   alert(day)
  // }
  
  state = {
    day: 0,
    month: ""
  }
  
  componentDidUpdate(){
    
  }

  //create a function which sets state with the current date
  setSelectedDate = (data, data2) => {
    console.log("setselected at jounral", data,"data2:", data2)
    let selectedDay = data;
    let {_d} = data2;
    
    if (_d !== undefined) {
    let selectedMonth = moment(_d).format("MMM").toISOString();
    
    console.log("boom", selectedDay, selectedMonth)
    this.setState({
      day: selectedDay,
      month: selectedMonth
    }) 
    console.log(this.state.day, this.state.month, "state at jorunal after setstate")
    } else {
      this.setState({
        day: selectedDay
      })
    }
  }
  render() {
  
    return (
      <div>
        <CalendarSecond />
        {/* <NavBar /> */}
        {/* <Calendar setSelectedDate={this.setSelectedDate} currentDay={this.state.day}  currentMonth={this.state.month}/>  */}
        {/* <Calendar onDayClick={(e, day, month, year)=> this.onDayClick(e, day, month, year)}/>  */}
        <Entry selectedDay={this.state.day} selectedMonth={this.state.month}/>
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