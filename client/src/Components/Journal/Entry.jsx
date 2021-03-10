import React, { Component } from 'react'
import AddEntry from './AddEntry';
import axios from 'axios';

 export default class Entry extends Component {

  state = {
    entry: null
  }

  getData = () => {
    //console.log('PASSED TO DB', this.props.selectedDay);
    if (this.props.selectedDay) {
      axios.get(`/getSelectedEntry?date=${this.props.selectedDay}`)
      .then(response => {
        //console.log("this is the response", response)
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
    if(!this.state.entry) return (<p>Still Loading</p>)
    else {
    return (
      
      <div>
        <p>date: {this.state.entry.date} </p>
        <p>question1: {this.state.entry.question1}</p>
        <p>question2 {this.state.entry.question2}</p>
        <p>question3: {this.state.entry.question3}</p>
        <p>ratingMood: {this.state.entry.ratingMood} </p>
        <p>ratingMotivation: {this.state.entry.ratingMotivation}</p> 
      </div>
    )
    }
  }

}