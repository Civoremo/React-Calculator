import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Calculator from './components/calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Calculator</h2>
        <Route path='/' component={Calculator} />
      </div>
    );
  }
}

export default App;
