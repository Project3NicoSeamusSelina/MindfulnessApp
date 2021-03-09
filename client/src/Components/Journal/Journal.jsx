
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Entry from './Entry'
import Calendar from '../Calendar/Calendar'
import { BrowserRouter, Route, Link } from "react-router-dom";
import moment from 'moment';
import CalendarSecond from '../CalendarSec/CalendarSecond';
import AddEntry from './AddEntry';
import axios from 'axios';

export default class Journal extends Component {
  // onDayClick=(e, day, month, year)=> {
  //   alert(day)
  // }
  
  state = {
    selectedDay: null,
  }
  
  componentDidMount(){
    this.getData();
  }

   
  componentDidUpdate(){
    this.getOtherData();
  }
 
  getDates =(day) => {
    this.setState({
      selectedDay: day
    })
    console.log(this.state.selectedDay, "state selectedday at jounral")
  }
  
  getData = () => {
    /* REMINDER: before deployment change to horoku link!! */
    axios.get('http://localhost:5005/entries')
      .then(response => {
        console.log("this is the response", response, "This is response.data", response.data)
        this.setState({
          selectedDay: this.props.selectedDay,
          
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  getOtherData = () => {
    let selectedDay = this.state.selectedDay
    console.log("This is the selected day", selectedDay)
    axios.get("/getSelectedEntry", {
      selectedDay
    })
    .then(response=>console.log("this is the response",response))
    .catch(err =>console.log(err)) 
  }

  
  render() {
    this.getOtherData();
    return (
      <div>
        <CalendarSecond getDates={this.getDates} selectedDay={this.state.selectedDay}/>
        <AddEntry getData={this.getData} />
        {/* <NavBar /> */} 
        {/* <Calendar setSelectedDate={this.setSelectedDate} currentDay={this.state.day}  currentMonth={this.state.month}/>  */}
        {/* <Calendar onDayClick={(e, day, month, year)=> this.onDayClick(e, day, month, year)}/>  */}
        <Entry selectedDay={this.state.selectedDay}/>
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