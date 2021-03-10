import React from "react"
import axios from 'axios';
import ToDoListItems from "./ToDoListItems";


export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      todo: '', 
      entries:[]
    };
  }

  componentDidMount() {
    this.getData();
  }
  
  handleSubmit= event => {
    event.preventDefault();
    axios.post('/items', {
      todo: this.state.todo,
      user: this.props.user
     
    })
      .then((response) => {
       console.log(response.data, "response at axios post FE") 
        this.setState({
            todo: '',
            entries:[]
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
    console.log('PASSED TO DB', this.props.todo);
    if (this.props.todo) {
      axios.get('/items')
      .then(response => {
        console.log("this is the response", response)
        this.setState({
          entries: response.data
        })
      })
      .catch(err => console.log(err)) 
    }
  }

  render(){
    console.log("THIS IS THE USER", this.props.user)
    return(
      <div>
        <h1>Test</h1>
        <form onSubmit={this.handleSubmit}>
          <label >
              ToDo:
          <input type="text" name="todo" id="todo" value={this.state.todo.value} onChange={this.handleChange}/>
            </label>
          <button id='btn' type="submit">Add to Do</button>
        </form>
       <ToDoListItems entries={this.state.entries}/>
      </div>
    )
  }
}
