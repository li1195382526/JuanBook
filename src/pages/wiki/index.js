import React, { Component, Fragment } from 'react'
import { Carousel, Grid } from 'antd-mobile';
import { NavLink} from 'react-router-dom'
import './style.scss'

import money from '../../assets/img/money.png'
import time from '../../assets/img/clock.png'
import gold from '../../assets/img/do.png'
import supers from '../../assets/img/supermarket.png'

class Wiki extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperlist: [],
      wikigrid: []
    }
  }

  render() {
    return (
      <Fragment>
       
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.swiperlist.map(value => (
            <div key={value.id}>
              <img className="swiper-item" src={value.pic} alt=""/>
            </div>
          ))}
        </Carousel>
          <ul className = "list">
            <li 
            //  onClick={() => {
            //   this.props.history.push('/Second')
              
            // }} 
            ><NavLink to = "/Second"><div className = "li1"><div className = "li11"><img src = {money} alt=""/></div>瓜分60元</div></NavLink></li>
            <li><NavLink to = "/Time"><div className = "li2"><div className = "li21"><img src = {time} alt="" /></div>限时秒杀</div></NavLink></li>
            <li><NavLink to = "/Supermark"><div className = "li3"><div className = "li31"><img src = {gold} alt=""/></div>品牌特卖</div></NavLink></li>
            <li><NavLink to = "/Dodm"><div className = "li4"><div className = "li41"><img src = {supers} alt=""/></div>生活超市</div></NavLink></li>
          </ul>
            
            
            
            
            
        <Grid data={this.state.wikigrid} columnNum={3} hasLine={false}/>
        
      </Fragment>
    )
  }

  componentDidMount() {
    fetch('/api/banner')
      .then(response => response.json())
      .then(result => {
        console.log(result.adsInfo.slide_ads.config.slide)
        this.setState({
          swiperlist: result.adsInfo.slide_ads.config.slide
        })
      })

    fetch('/api/index')
      .then(response => response.json())
      .then(result => {
        this.setState({
          wikigrid: result.data.categories.map(value => (
            {
              icon: 'http://placehold.it/200x200',
              text: value.title
            }
          ))
        })
      })
  }
}

export default Wiki