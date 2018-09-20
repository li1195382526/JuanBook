import React, { Component, Fragment } from 'react'
import { Carousel, Tabs, Badge } from 'antd-mobile';
import { NavLink} from 'react-router-dom'
import './style.scss'

import money from '../../assets/img/money.png'
import time from '../../assets/img/clock.png'
import gold from '../../assets/img/do.png'
import supers from '../../assets/img/supermarket.png'
import img1 from '../../assets/img/1.gif'
import img2 from '../../assets/img/1.png'
import img3 from '../../assets/img/2.png'
import img4 from '../../assets/img/3.png'


class Wiki extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperlist: [],
      wikigrid: [],
      tabs:[
          { title: <Badge text={''}>精选专场</Badge> },
          { title: <Badge text={''}>精选产品</Badge> }
          
        ]
    }
  }
  // { const tabs = [
  //   { title: <Badge text={'3'}>First Tab</Badge> },
  //   { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
  //   { title: <Badge dot>Third Tab</Badge> },
  // ] }

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
            <li><NavLink to = "/Seckill"><div className = "li2"><div className = "li21"><img src = {time} alt="" /></div>限时秒杀</div></NavLink></li>
            <li><NavLink to = "/Supermark"><div className = "li3"><div className = "li31"><img src = {gold} alt=""/></div>品牌特卖</div></NavLink></li>
            <li><NavLink to = "/Dodm"><div className = "li4"><div className = "li41"><img src = {supers} alt=""/></div>生活超市</div></NavLink></li>
          </ul>
            <div className = "hot">
              <div className = "hot1">
                <img src={img1} alt=""/>
              </div>
              <div className = "hot2">
                <img src={img2} alt=""/><img src={img3} alt=""/>
              </div>
            </div>
            <div className = "title">
              <img src = {img4} alt = ""/>
            </div>
            
      
                {/* 精选产品处 */}
            <Tabs tabs={this.state.tabs}
            initialPage={1}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab);}}
            >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of first tab
           </div>
          
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
          
            </Tabs>
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