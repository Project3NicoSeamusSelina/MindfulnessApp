
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Entry from './Entry'
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
    selectedDay: 0,
  }
  
  componentDidMount(){
    this.getData();
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


  
  render() {
  
    return (
      <div>
        <CalendarSecond selectedDay={this.state.selectedDay}/>
        <AddEntry getData={this.getData} />
        {/* <NavBar /> */} 
        {/* <Calendar setSelectedDate={this.setSelectedDate} currentDay={this.state.day}  currentMonth={this.state.month}/>  */}
        {/* <Calendar onDayClick={(e, day, month, year)=> this.onDayClick(e, day, month, year)}/>  */}
        {/* <Entry selectedDay={this.state.day} selectedMonth={this.state.month}/> */}
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