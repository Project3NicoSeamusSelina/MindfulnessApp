import React, { Component } from 'react'
import AddEntry from './AddEntry';
import axios from 'axios';
import moment from 'moment';

/* export default class Entry extends Component {
  state = {
    entries: []
  }

  componentDidUpdate() {
    this.getData();
  }

  getData = async () => {
    console.log("trigger durch comppnentdidmount")
    let {selectedDay, selectedMonth} = this.props
    try {
      let request = await axios.get("http://localhost:5005/getCurrentDayJournal", {
        DataTransferItem:{
          day: selectedDay,
          month: selectedMonth
        }
        
      })
      let current = await request
      console.log(current)
    } catch (err) {
      console.log(err)
    }
    console.log(selectedDay, selectedMonth, "at FE day and month at entry inside req")
    
     
  }

  render() {
 
    return (
      <div>
        <AddEntry getData={this.getData} />
      </div>
    )
  }
} */
