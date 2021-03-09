import React, { Component } from 'react'
import AddEntry from './AddEntry';
import axios from 'axios';


 export default class Entry extends Component {

   state = {
      selectedDay: this.props.selectedDay
   }
 
 

  getData = () => {
    let selectedDay = this.state.selectedDay
    console.log("This is the selected day", selectedDay)
    axios.get(`/getSelectedEntry?date=${selectedDay}`)
    .then(response=>console.log("this is the response",response))
    .catch(err =>console.log(err)) 
  }

  componentDidUpdate() {
    this.getData()
  }

  render() {
 
    return (
      <div>
        <AddEntry getData={this.getData} />
        
      </div>
    )
  }
}