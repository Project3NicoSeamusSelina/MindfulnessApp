
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
      <div className="">
         <div className="calendarAndPhotoContainer">
         <CalendarSecond getDates={this.getDates} selectedDay={this.state.selectedDay} />
            
            <span className="introJournaling">Studies have traced a range of impressive benefits to the simple act of<b> writing down the things
              for which we’re grateful </b> — including better sleep, fewer symptoms of illness, and more happiness. <br></br><br></br>
                Keep a daily record of life's little blessings by answering these questions and establish mindfulness, express gratitude, 
                and bring lasting, positive change into your life.
          </span>
          <img id='illustration' src={'/images/Illustration1.png'} />
           
        </div>

        <div className='entriesContainer'>
        <Entry selectedDay={this.state.selectedDay}/>
         <div>
        <AddEntry />
        </div>
        </div>
        
        {/* <NavBar /> */} 
        {/* <Calendar setSelectedDate={this.setSelectedDate} currentDay={this.state.day}  currentMonth={this.state.month}/>  */}
        {/* <Calendar onDayClick={(e, day, month, year)=> this.onDayClick(e, day, month, year)}/>  */}
      </div>



    )
  }
}