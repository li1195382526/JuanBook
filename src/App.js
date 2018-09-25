import React, { Component } from 'react'

import './style/usage/app.scss'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/home'

import Second from './pages/second/index'
import Time from './pages/second/time/index'
import Supermark from './pages/second/supermark.js'

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path="/Second" component={Second}></Route>
          <Route path="/Time/:id" component={Time}></Route>
          <Route path="/Supermark" component={Supermark}></Route>
        <Home></Home>
        </Switch>
    );
  }
}

export default App;
