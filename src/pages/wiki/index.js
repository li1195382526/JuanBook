import React, { Component, Fragment } from 'react'
import { Carousel, Grid } from 'antd-mobile';

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
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.swiperlist.map(value => (
            <div key={value.id}>
              <img className="swiper-item" src={value.imgUrl} alt=""/>
            </div>
          ))}
        </Carousel>

        <Grid data={this.state.wikigrid} columnNum={3} hasLine={false}/>
      </Fragment>
    )
  }

  componentDidMount() {
    fetch('/api/swiper')
      .then(response => response.json())
      .then(result => {
        this.setState({
          swiperlist: result.data
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