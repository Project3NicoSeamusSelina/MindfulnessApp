// import React from "react";
import Journal from '../Journal/Journal'
import Navbar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';



import React, { Component } from 'react'


export default class WelcomePage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h2>This is another mental health app</h2>
      <Link to="/journal">Journal</Link>
      <Link to="/dashboard">Dashboard</Link>
      </div>
    )
  }
}


// const HomeScreen = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>Hello Team Nico, Seamus, Selina</h1>
//       <Journal {...props} />
//     </div>
//   )
// }

// export default HomeScreen;