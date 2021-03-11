import React, { Component } from 'react'
import AddEntry from './AddEntry';
import './Journal.css';
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
    if(!this.state.entry) return (<p className="entriesCalendar"></p>)
    else {
    return (
      
      <div className="entriesCalendar">
        <h1 className='header2'>Your Journal Entry</h1>
        <h5>Date</h5>
        <p>{this.state.entry.date} </p>
        <h5>What are you looking forward for today?</h5>
        <p>{this.state.entry.question1}</p>
        <h5>What are you grateful for?</h5>
        <p>{this.state.entry.question2}</p>
        <h5>What is you focus today?</h5>
        <p>{this.state.entry.question3}</p>
        <h5>How is your mood today?</h5>
        <p>{this.state.entry.ratingMood} </p>
        <h5>How motivated do you feel?</h5>
        <p> {this.state.entry.ratingMotivation}</p> 
      </div>
    )
    }
  }

}