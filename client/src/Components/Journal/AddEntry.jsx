import React, { Component } from 'react';
import './Journal.css';
import axios from 'axios';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
//import ratherHappy from '/public/images/Mood_ratherHappy.png';


export default class AddEntry extends Component {

  state = {
    date: '',
    question1:'',
    question2: '',
    question3: '',
    ratingMood: '',
    ratingMotivation: '',
    journal: [],
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
    axios.post('/entries', {
      date: this.state.date,
      question1: this.state.question1,
      question2: this.state.question2,
      question3: this.state.question3,
      ratingMood: this.state.ratingMood,
      ratingMotivation: this.state.ratingMotivation
    })
      .then((response) => {
        
        this.setState({
          journal: response.data,
          date:"",
          question1: "",
          question2: "",
          question3: "",
          ratingMood: "",
          ratingMotivation: "",
        })
       
  
      })
  }

  

  render() {
    /* let data = this.state.journal.map(element => {
      return element.date
    }) */
    return (
      
      <div className='entryBox'>
        <h1 className='header2'>Create a Memory</h1>
        
      
      <form onSubmit={this.handleSubmit}>
      <div className='openQuestionFields'> 
      <label className='option' htmlFor="date"> </label>
      <input
        type="date"
        id="date"
        name="date"
        value={this.state.date}
        onChange={this.handleChange}
      />
      <br></br>
      <label className='option' htmlFor="question1"> </label>
      <input
        type="text"
        id="question1"
        name="question1"
        placeholder="What are you looking forward for today?"
        value={this.state.question1}
        onChange={this.handleChange}
      />
      <br></br>
        <label className='option' htmlFor="question2"></label>
        <input
          type="text"
          id="question2"
          name="question2"
          placeholder="What are you grateful for today?"
          value={this.state.question2}
          onChange={this.handleChange}
        />
        <br></br>
        <label className='option' htmlFor="question3"></label>
        <input
          type="text"
          id="question3"
          name="question3"
          placeholder='What is your focus today?'
          value={this.state.question3}
          onChange={this.handleChange}
          
        />
        </div>

        <p className='question'>How would you describe your current mood?</p>
        <div className='optionBoxes'>
        <div className='moodBoxes'  >
        <div className='imageContainer moodBox'>
            <label className='box' >
              <input type="radio" name="ratingMood" value="happy" onChange={this.handleChange} />
              <img src={'/images/Happy.png'} />
            </label>
        
          <label className='box'>
            <input type="radio" name="ratingMood"   value="rather happy" onChange={this.handleChange} />
            <img src={'/images/ratherHappy.png'} />
          </label>

          <label className='box'>
            <input type="radio" value="rather unhappy" name= "ratingMood" onChange={this.handleChange} />
            <img src={'/images/ratherUnhappy.png'} />
          </label>

          <label className='box'>
            <input type="radio" value="unhappy"  name= "ratingMood" onChange={this.handleChange}/>
            <img src={'./images/Unhappy.png'} />
          </label>
          </div>
        </div>
        </div>

        {/* Rating Questions */}
        <p className='question'>How motivated to you feel?</p>
        <div className='optionBoxes'>
        <fieldset className='moodBoxes'  >
          <div className='imageContainer motivationBox'>
            <label className='box' >
              <input type="radio" name="ratingMotivation" value="motivated" onChange={this.handleChange} />
              <img src={'./images/fullEnergy.png'} />
            </label>

          <label className='box'>
            <input type="radio" name="ratingMotivation" value="rather motivated" onChange={this.handleChange} />
            <img src={'./images/muchEnergy.png'} />
          </label>

          <label className='box'>
            <input type="radio" name="ratingMotivation" value="little motivated" onChange={this.handleChange}/>
            <img src={'./images/littleEnergy.png'} />
          </label>

          <label className='box'>
            <input type="radio" name="ratingMotivation" value="unmotivated" onChange={this.handleChange}/>
            <img src={'./images/noEnergy.png'} />
          </label>
          </div>
        </fieldset>
        </div>
        {/* <button style={{border: 'none', background: 'white'}}><ContactSupportRoundedIcon style={{fill:"green"}} onClick={()=>{console.log('boom Selina!!!')}}/></button>*/} 
      <button id='btn' type="submit">Create entry</button>
    </form>
    </div>
    
    )
  }
}

