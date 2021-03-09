import React, { Component } from 'react'
import AddEntry from './AddEntry';
import axios from 'axios';
import moment from 'moment';

 export default class Entry extends Component {
 
  componentDidUpdate() {
    this.getData();
  }

 /*  getData = async () => {
    console.log("trigger durch comppnentdidmount")
    let selectedDay = this.props.selectedDay
    try {
      let request = await axios.get("/getSelectedEntry", {
        params:{
         selectedDay
        }
        
      })
      console.log("this is request", request)
      let current = await request
      console.log(current)
    } catch (err) {
      console.log(err)
    }
    console.log(selectedDay, "at FE day and month at entry inside req")
    
     
  } */

  getData = () => {
    let selectedDay = this.props.selectedDay
    console.log("This is the selected day", selectedDay)
    axios.get('/getSelectedEntry', {
      selectedDay
    })
    .then(response=>console.log("this is the response",response))
    .catch(err =>console.log(err)) 
  }


  render() {
 
    return (
      <div>
        <AddEntry getData={this.getData} />
        
      </div>
    )
  }
}