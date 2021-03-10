import React, { Component } from 'react'
import AddEntry from './AddEntry';
import axios from 'axios';

 export default class Entry extends Component {

  getData = () => {
    console.log('PASSED TO DB', this.props.selectedDay);
    if (this.props.selectedDay) {
      axios.get(`/getSelectedEntry?date=${this.props.selectedDay}`)
      .then(response => {
        console.log("this is the response", response)
      })
      .catch(err => console.log(err)) 
    }
    
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevProps != this.props) {
      this.getData();
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}