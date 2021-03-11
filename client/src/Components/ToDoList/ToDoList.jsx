import React from 'react'
import axios from 'axios';
import ToDoListItems from './ToDoListItems';


export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      todo: '', 
      entries:null
    };
  }

  componentDidMount() {
    this.getData();
  }
  
  handleSubmit= event => {
    console.log('SUBMIT')
    event.preventDefault();
    axios.post('/items', {
      todo: this.state.todo,
     
    })
      .then(() => {
        console.log('GET DATA')
        this.getData()
        this.setState({
            todo: '',
        }) 

      })
  }
  
  handleChange= (event) => {
    const name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }

  getData = () => {   
    console.log('STEP ONE')
      axios.get('/items')
      .then(response => {
        console.log('RESPONSE', response.data)
          this.setState({
          entries: response.data
        })
      })
      .catch(err => console.log(err)) 
    
  }

  render(){
    
    if (!this.state.entries){
      return(
        <div>
          <h1>Test</h1>
          <form onSubmit={this.handleSubmit}>
            <label >
                ToDo:
            <input type='text' name='todo' id='todo' value={this.state.todo.value} onChange={this.handleChange}/>
              </label>
            <button id='btn' type='submit'>Add to Do</button>
          </form>
        </div>
      )
    } else {
      return(
        <div>
          <h1>Test</h1>
          <form onSubmit={this.handleSubmit}>
            <label >
                ToDo:
            <input type='text' name='todo' id='todo' value={this.state.todo.value} onChange={this.handleChange}/>
              </label>
            <button id='btn' type='submit'>Add to Do</button>
          </form>
         <ToDoListItems entries={this.state.entries}/>
        </div>
      )
    }
    
  }
}
