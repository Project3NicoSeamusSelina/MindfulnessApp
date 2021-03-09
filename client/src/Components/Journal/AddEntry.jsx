import React, { Component } from 'react'
import axios from 'axios';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';


export default class AddEntry extends Component {

  state = {
    date: '',
    description: '',
    entry:'',
    journal: [],
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    console.log("value", value, "name", name)
    
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:5005/entries', {
      date: this.state.date,
      title: this.state.title,
      description: this.state.description,
      entries: this.state.entry
    })
      .then((response) => {
        console.log(response.data, "response at axios post FE")
       
        this.setState({
          journal: response.data,
          date: '',
          describtion: "",
          entry: ""
        })
        
        console.log(this.state, "stte at FE")
        this.props.getData();
      })
  }

  

  render() {
    let data = this.state.journal.map(element => {
      return element.date
    })
    console.log(data)
    return (
      <div>
        <h1>Add a new entry</h1>
        <button style={{border: 'none', background: 'white'}}><ContactSupportRoundedIcon style={{fill:"green"}} onClick={()=>{console.log('boom Selina!!!')}}/></button>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="date">Date: </label>
      <input
        type="date"
        id="date"
        name="date"
        value={this.state.date}
        onChange={this.handleChange}
      />
      <br></br>
      <label htmlFor="entry">What are you grateful for today? </label>
      <input
        type="text"
        id="entry"
        name="entry"
        value={this.state.entry}
        onChange={this.handleChange}
      />
    <br></br>
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        id="description"
        name="description"
        value={this.state.description}
        onChange={this.handleChange}
      />
      <button type="submit">Create this entry</button>
    </form>
    
    </div>
    )
  }
}

