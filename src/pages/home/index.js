import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

import './style.scss'

import wiki from '../../assets/iconfonts/1.svg'
import wikiActive from '../../assets/iconfonts/11.svg'
import hot from '../../assets/iconfonts/2.svg'
import hotActive from '../../assets/iconfonts/21.svg'
import map from '../../assets/iconfonts/3.svg'
import mapActive from '../../assets/iconfonts/31.svg'
import setting from '../../assets/iconfonts/4.svg'
import settingActive from '../../assets/iconfonts/41.svg'

import Wiki from '../wiki/index'
import Type from '../type/index'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'wiki',
      hidden: false,
      fullScreen: false,
    }
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="首页"
          key="wiki"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${wiki}) center center /  21px 21px no-repeat` }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${wikiActive}) center center /  21px 21px no-repeat` }}
          />
          }
          selected={this.state.selectedTab === 'wiki'}
          onPress={() => {
            this.setState({
              selectedTab: 'wiki',
            });
          }}
        >
          <Wiki />
        </TabBar.Item>
        <TabBar.Item
          title="分类"
          key="hot"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${hot}) center center /  21px 21px no-repeat` }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${hotActive}) center center /  21px 21px no-repeat` }}
          />
          }
          selected={this.state.selectedTab === 'hot'}
          onPress={() => {
            this.setState({
              selectedTab: 'hot',
            });
          }}
        >
         <Type></Type>
        </TabBar.Item>
        <TabBar.Item
          title="购物车"
          key="map"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${map}) center center /  21px 21px no-repeat` }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${mapActive}) center center /  21px 21px no-repeat` }}
          />
          }
          selected={this.state.selectedTab === 'map'}
          onPress={() => {
            this.setState({
              selectedTab: 'map',
            });
          }}
        >
          <div>购物车</div>
        </TabBar.Item>
        <TabBar.Item
          title="我的卷皮"
          key="setting"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${setting}) center center /  21px 21px no-repeat` }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${settingActive}) center center /  21px 21px no-repeat` }}
          />
          }
          selected={this.state.selectedTab === 'setting'}
          onPress={() => {
            this.setState({
              selectedTab: 'setting',
            });
          }}
        >
          <div>我的卷皮书</div>
        </TabBar.Item>
      </TabBar>
    )
  }
}

export default Home