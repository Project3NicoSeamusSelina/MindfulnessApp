// import React, { Component } from "react";
// import FlipMove from "react-flip-move";
 
// class TodoItems extends Component {
//   constructor(props) {
//     super(props);
 
//     this.createTasks = this.createTasks.bind(this);
//   }
 
//   delete(key) {
//     this.props.delete(key);
//   }

//   createTasks(item) {
//     return <li onClick={() => this.delete(item.key)} 
//                 key={item.key}>{item.text}</li>
//   }
 
//   render() {
//     let todoEntries = this.props.entries;
//     console.log('TODOENTRIESLOOKHERE', todoEntries)
//     let listItems = todoEntries.map(this.createTasks);
 
//     return (
//       <ul className="theList">
//         <FlipMove duration={250} easing="ease-out">
//           {listItems}
//       </FlipMove>
//       </ul>
//     );
//   }
// };
 
// export default TodoItems;


//SELINAS TO DO ITEMS

import React from 'react'

export default function ToDoListItems(props) {
  return (
    
         <div>
            {props.entries.map(item => {
              return (
                <div>
                  <ul>
                  <li>
                    {item}
                  </li>
                  </ul>
                </div>
            )}
            )}
          </div>
    
  )
}