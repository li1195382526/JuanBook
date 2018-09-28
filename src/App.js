import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import './style/usage/app.scss'

import Home from './pages/home'


import Second from './pages/second/index'
import Time from './pages/second/time/index'
import Supermark from './pages/second/supermark.js'

import LifeSupermark from './pages/second/LifeSupermark'


import Payment from './pages/myFile/payment.js'
import Clouds from './pages/myFile/clouds.js'
import Goods from './pages/myFile/goods.js'
import AfterSales from './pages/myFile/after-sales.js'

import Home_shopList from './pages/Home_shopList'
import Home_goods from './pages/Home_goods'

class App extends Component {
  render() {
    return (
      <Switch>

          <Route path="/Second" component={Second}></Route>
          <Route path="/Time/:id" component={Time}></Route>
          <Route path="/Supermark" component={Supermark}></Route>


          {/* <Route path="/Dodm" component={Dodm}></Route> */}
          <Route path="/LifeSupermark" component={LifeSupermark}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Payment"  component={Payment} ></Route>
          <Route path="/Clouds" component={Clouds} ></Route>
          <Route path="/Goods" component={Goods} ></Route>
          <Route path="/AfterSales" component={AfterSales} ></Route>
          <Route path="/Home_shopList" component={Home_shopList}></Route>
          <Route path="/Home_goods" component={Home_goods}></Route>
        {/* <Home></Home> */}
     </Switch>


      
       
    


        // <Home></Home>
        // </Switch>



    );
  }
}

export default App;
