import React, { Component } from 'react';
import Countries from './Countries'

import 'normalize.css';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div>
        Free Degree Finder
        <Countries />
      </div>
    );
  }
}

export default App;
