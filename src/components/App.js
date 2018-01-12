// Im using App.js as Component thinking to import more components in.
// This Component works as a parent for the others elements on the application

import React, { Component } from 'react';
import Main from './Cards/Main'

class App extends Component {
  render() {
    return (
      <Main />
    )
  }
}

export default App;
