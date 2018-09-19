import React, { Component } from 'react'

import './style/usage/app.scss'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/home'

import Second from './pages/second/index'
import Time from './pages/second/time.js'
import Supermark from './pages/second/supermark.js'
import Dodm from './pages/second/dodm.js'

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path="/Second" component={Second}></Route>
          <Route path="/Time" component={Time}></Route>
          <Route path="/Supermark" component={Supermark}></Route>
          <Route path="/Dodm" component={Dodm}></Route>
        <Home></Home>
        </Switch>
    );
  }
}

export default App;
