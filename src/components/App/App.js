import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      months: []
    }
  


  }
  
  
  
  componentDidMount() {
    this.getMonths();
  }

  getMonths() {
    axios.get('/calendar')
    .then((response) => {
      this.setState({ // this is just an object that is props: key
        months : response.data
      });
      console.log(this.state);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>SELECTED MONTH GOES HERE</h3>
          <br/>
        </header>
        <br/>
        <p>List of months goes here</p>
      </div>
    );
  }
}

export default App;
