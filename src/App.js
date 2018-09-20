import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import './style/usage/app.scss'

import Home from './pages/home'

import Payment from './pages/myFile/payment.js'
import Clouds from './pages/myFile/clouds.js'
import Goods from './pages/myFile/goods.js'
import AfterSales from './pages/myFile/after-sales.js'

class App extends Component {
  render() {
    return (
      <Switch>
        {/* <Home></Home> */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/Payment"  component={Payment} ></Route>
        <Route path="/Clouds" component={Clouds} ></Route>
        <Route path="/Goods" component={Goods} ></Route>
        <Route path="/AfterSales" component={AfterSales} ></Route>
      </Switch>
    );
  }
}

export default App;
