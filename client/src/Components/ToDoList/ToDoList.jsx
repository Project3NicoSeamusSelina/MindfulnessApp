import React from 'react'
import axios from 'axios';
import ToDoListItems from './ToDoListItems';
import './ToDoList.css'
import FlipMove from "react-flip-move";

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
        <div id="container" className="todoListMain">
           <img id="illustrationRoutine" src={"./images/illustrationroutine.png"} />
            <div className="header">
              <h1 >My daily Routine</h1>
              <form className="formdiv" onSubmit={this.handleSubmit}>
                <label >    

                <input type='text' name='todo' id='todo' value={this.state.todo.value} onChange={this.handleChange}/>
                <button id='buttonroutine' type='submit'>Add Ritual</button>
                </label>
              </form>
            </div>
          
        </div>
      )
    } else {

    return(
        <div id="container" className="todoListMain">
          <img id="illustrationRoutine" src={"./images/illustrationroutine.png"} />
          <div className="header">
            <h1>My daily Routine</h1>
            <form className="formdiv" onSubmit={this.handleSubmit}>
              <label >
                  
              <input type='text' name='todo' id='todo' value={this.state.todo.value} onChange={this.handleChange}/>
              <button id='buttonroutine' type='submit'>Add Ritual</button>
                </label>
            </form>
          <ToDoListItems entries={this.state.entries}/>
        
         </div>
        </div>
      )
    }
    
  }
}
