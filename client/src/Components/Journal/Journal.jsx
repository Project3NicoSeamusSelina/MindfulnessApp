
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
  

  getDates =(day) => {
    this.setState({
      selectedDay: day
    })
    console.log("state selected day at Journal", this.state.selectedDay)
  }
  
  // getData = () => {
  //   /* REMINDER: before deployment change to horoku link!! */
  //   axios.get('http://localhost:5005/entries')
  //     .then(response => {
  //       console.log("this is the response", response, "This is response.data", response.data)
  //       this.setState({
  //         selectedDay: this.props.selectedDay,
          
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }


  
  render() {
    console.log('THIS IS IN THE RENDER', this.state.selectedDay)
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