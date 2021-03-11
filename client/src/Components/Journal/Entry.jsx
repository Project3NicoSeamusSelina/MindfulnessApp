import React, { Component } from 'react'
import AddEntry from './AddEntry';
import axios from 'axios';

 export default class Entry extends Component {

  state = {
    entry: null
  }

  getData = () => {

    if (this.props.selectedDay) {
      axios.get(`/getSelectedEntry?date=${this.props.selectedDay}`)
      .then(response => {
        this.setState({entry: response.data})

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
    if(!this.state.entry) return (<p>Please select a day</p>)
    else {
    return (
      
      <div>
        <p>Date: {this.state.entry.date} </p>
        <p>you looked forward to: {this.state.entry.question1}</p>
        <p>you were grateful for: {this.state.entry.question2}</p>
        <p>you were focused on: {this.state.entry.question3}</p>
        <p>Your Mood: {this.state.entry.ratingMood} </p>
        <p>Your Motivation: {this.state.entry.ratingMotivation}</p> 
      </div>
    )
    }
  }

}