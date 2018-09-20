import React, { Component, Fragment } from 'react'
import { Carousel, Tabs, Badge } from 'antd-mobile';
import { NavLink} from 'react-router-dom'
import './style.scss'

import { Grid } from 'antd-mobile';

import money from '../../assets/img/money.png'
import time from '../../assets/img/clock.png'
import gold from '../../assets/img/do.png'
import supers from '../../assets/img/supermarket.png'
import img1 from '../../assets/img/1.gif'
import img2 from '../../assets/img/1.png'
import img3 from '../../assets/img/2.png'
import img4 from '../../assets/img/3.png'
import img5 from '../../assets/img/2.gif'

class Wiki extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperlist: [],
      wikigrid: [],
      tabs:[
          { title: <Badge text={''}>精选专场</Badge> },
          { title: <Badge text={''}>精选产品</Badge> }
          
        ],
        // data :Array.from(new Array(9)).map((_val, i) => ({
        //   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        //   text: `name${i}`,
        // })),
        goodsList:[]
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
            <li><NavLink to = "/Time"><div className = "li2"><div className = "li21"><img src = {time} alt="" /></div>限时秒杀</div></NavLink></li>
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
            <div className = "hot3">
              <img src = {img5} alt = ""/>
            </div>
            <div className = "title">
              <img src = {img4} alt = ""/>
            </div>
            
      
                {/* 精选产品处 */}
            <Tabs tabs={this.state.tabs}
            initialPage={1}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab);}}
            tabBarActiveTextColor='red'
            initialPage='1'
            >
            <div className = "goods" style={{  backgroundColor: '#fff' }}>
              
            {/* <Grid 
            // onClick={(el, index) => {
            //   this.props.history.push('/wikilist', { id: el.id })
            // }} 
            data={this.state.goodsList} 
            columnNum={2} 
           
            hasLine={false}/> */}

          
              <Grid data={this.state.goodsList}
                  columnNum={2}
                  renderItem={dataItem => (
                    <div style={{ padding: '12.5px' }}>
                      <img src={dataItem.icon} style={{ width: '100%', height: '100%' }} alt="" />
                      <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                        <span>I am title..</span>
                      </div>
                    </div>
                  )}
                />
           </div>
          
            <div className = "goods" style={{  backgroundColor: '#fff' }}>
            <Grid data={this.state.goodsList}
                  columnNum={2}
                  renderItem={dataItem => (
                    <div style={{ padding: '12.5px' }}>
                      <img src={dataItem.icon} style={{ width: '100%', height: '100%' }} alt="" />
                      <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                        <span>I am title..</span>
                      </div>
                    </div>
                  )}
                />
            </div>
          
            </Tabs>
      </Fragment>
    )
  }

  componentDidMount() {
    fetch('/api/banner')
      .then(response => response.json())
      .then(result => {
        // console.log(result.adsInfo.slide_ads.config.slide)
        this.setState({
          swiperlist: result.adsInfo.slide_ads.config.slide
        })
      })

    fetch('/api/list')
      .then(response => response.json())
      .then(result => {
        console.log(result.data.goods)
        this.setState({
          goodsList: result.data.goods.map(value => (
            {
              icon: value.pic_url,
              text: value.title
            }
          ))
        })
      })
  }
}

export default Wiki