import React, { Component } from 'react'
import axios from 'axios';

export default class VisionBoard extends Component {

  state = {
    goal: '',
    positiveAffirmation:'',
    
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
        
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:5005/entries', {
      date: this.state.goal,
      positiveAffirmation: this.state.positiveAffirmation
      
    })
      .then((response) => {
        
        this.setState({
          goal:"",
          positiveAffirmation:'',
        })
        
      })
  }

  render() {
    return (
      <div>
            <h1>Your Vision Board</h1>
            <form onSubmit={this.handleSubmit}>
              <label className='option' htmlFor="goal"> </label>
              <input
                type="text"
                id="goal"
                name="goal"
                value={this.state.goal}
                onChange={this.handleChange}
                placeholder='Your monthly goal'
              />

              <br></br>
              <label className='option' htmlFor="positiveAffirmation"> </label>
              <input
                type="text"
                id="positiveAffirmation"
                name="positiveAffirmation"
                value={this.state.positiveAffirmation}
                onChange={this.handleChange}
                placeholder='Your positive Affirmation'
              />

            </form>
        </div>
        
      
    )
  }
}
