import React, { Component, Fragment } from 'react'
import { Carousel, Grid } from 'antd-mobile';
import { BrowserRouter as Router} from 'react-router-dom'
import './style.scss'

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
        {/* <Route path="/" component = {Comp1}>最</Route> */}
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
const Comp1 = (props)=>(
  <div>comp1</div>
)
export default Wiki