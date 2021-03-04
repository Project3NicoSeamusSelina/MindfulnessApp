
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import { BrowserRouter, Route, Link } from "react-router-dom";


export default class Journal extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        You are on the journal
      </div>
    )
  }
}



// const Journal = (props) => {

//   console.log("props at Journal", props)
//   return (
//     <div>
//       <h1>Grützi from Felix</h1>
//     </div>
//   )
// }

// export default Journal