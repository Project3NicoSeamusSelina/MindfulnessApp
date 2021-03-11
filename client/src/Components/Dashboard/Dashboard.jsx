
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import { BrowserRouter, Route, Link, Image } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import './dash.css';


export default class Dashboard extends Component {
  render() {

    return (
      <div className="mt-5">

      

        <div className="d-flex justify-content-center pt-4">
        <img src={"./images/techdash.png"} alt="graphics"/>

    <Card className="singCard d-flex justify-content-center align-self-center border border-white" style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>

        Have you ever tried to keep track of how you feel? <br></br>
Self-journaling can help you stay focused and productive, while keeping your head clear and your motivation high. <br></br>
So give MOND a go and structure your daily life and thoughts through dated calendar views and ritual patterns. 
Get closer to your goals, one day at a time.
        </Card.Text>
        <Card.Link href="#"></Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </div>


    <div>
      <div className="cardHS container d-flex flex-wrap d-flex justify-content-center pt-3">
          <Card className="dashCards m-5" style={{ width: '18rem', height: '8rem' }}>
      <Card.Body>
        <Card.Title>Journal</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Keep an eye on your emotions</Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
        <Card.Link href="/journal">Click Here</Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link>  */}
      </Card.Body>
    </Card>

    

    <Card className="dashCards m-5" style={{ width: '18rem', height: '8rem' }}>
      <Card.Body>
        <Card.Title>Daily Routine</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Set your goals and mind clear</Card.Subtitle>
        <Card.Text>
        
        </Card.Text>
        <Card.Link href="/routine">Click Here</Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </div>
     
      </div>
      </div>
    )
  }
}
