import React, { Component } from 'react'
import AddEntry from './AddEntry';
import axios from 'axios';

export default class Entry extends Component {
  state = {
    entries: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get('/entries')
      .then(response => {
        console.log(response)
        this.setState({
          entries: response.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <AddEntry getData={this.getData} />
      </div>
    )
  }
}
