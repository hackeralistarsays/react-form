import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">        
          <h2>Validating React Form</h2>
          <br></br>
        <Form />        
      </div>
    );
  }
}

export default App;
