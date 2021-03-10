import React from 'react'

export default function ToDoListItems(props) {
  return (
    <div>
      <div>
         <div>
            {props.entries.length > 0 && <h2>Items: </h2>}
            {props.entries.map(item => {
              return (
                <div>
                  <h3>
                    {item.todo}
                  </h3>
                </div>
            )}
            )}
          </div>
        </div>
    </div>
  )
}


// import React, { Component } from 'react'

// export default class ToDoListItems extends Component {
//   render() {
//     return (
      
//     )
//   }
// }
