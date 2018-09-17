import React, { Component } from 'react'

import './style/usage/app.scss'

import Home from './pages/home'
import { BrowserRouter as Router} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <Home></Home>
      </Router>
    );
  }
}

export default App;
