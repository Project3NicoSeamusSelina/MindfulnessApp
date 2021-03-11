// import React, { Component } from "react";
// import './style.css';
// import TodoItems from "./TodoItems"
 
// class TodoList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: []
//     };

//     this.addItem = this.addItem.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//   }

//   addItem(e) {
//     if (this._inputElement.value !== "") {
//       let newItem = {
//         text: this._inputElement.value,
//         key: Date.now()
//       };
   
//       this.setState((prevState) => {
//         return { 
//           items: prevState.items.concat(newItem) 
//         };
//       });
//     }
//     this._inputElement.value = "";
     
    
       
//     e.preventDefault();
 
//   }
//   deleteItem(key) {
//     const filteredItems = this.state.items.filter(function (item) {
//       return (item.key !== key);
//     });
   
//     this.setState({
//       items: filteredItems
//     });
//   }
//   render() {
//     return (
//       <div className="todoListMain">
//         <div className="header">
//           <form onSubmit={this.addItem}>
//             <input ref={(a) => this._inputElement = a}
//                     placeholder="today i want to...">
//             </input>
//             <button type="submit">add</button>
//           </form>
//         </div>
//         <TodoItems entries={this.state.items}
//                     delete={this.deleteItem}/>
//       </div>
//     );
//   }
// }
 
// export default TodoList;


//HERE IS SELINA'S LIST


import React from 'react'
import axios from 'axios';
import ToDoListItems from './TodoItems';


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
    event.preventDefault();
    axios.post('/items', {
      todo: this.state.todo,
     
    })
      .then(() => {
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
      axios.get('/items')
      .then(response => {
          this.setState({
          entries: response.data
        })
      })
      .catch(err => console.log(err)) 
    
  }

  render(){
    console.log('THIS IS THE USER', this.props.user)
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