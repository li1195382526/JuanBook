import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import './style/usage/app.scss'

import Home from './pages/home'


import Second from './pages/second/index'
import Time from './pages/second/time.js'
import Supermark from './pages/second/supermark.js'
import Dodm from './pages/second/dodm.js'

import Payment from './pages/myFile/payment.js'
import Clouds from './pages/myFile/clouds.js'
import Goods from './pages/myFile/goods.js'
import AfterSales from './pages/myFile/after-sales.js'


class App extends Component {
  render() {
    return (
      <Switch>

          <Route path="/Second" component={Second}></Route>
          <Route path="/Time" component={Time}></Route>
          <Route path="/Supermark" component={Supermark}></Route>
          <Route path="/Dodm" component={Dodm}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Payment"  component={Payment} ></Route>
          <Route path="/Clouds" component={Clouds} ></Route>
          <Route path="/Goods" component={Goods} ></Route>
          <Route path="/AfterSales" component={AfterSales} ></Route>
        {/* <Home></Home> */}
     </Switch>

      
       
    

    );
  }
}

export default App;
