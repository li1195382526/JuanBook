import React ,{ Component } from 'react'
import { TabBar} from 'antd-mobile'
import { Route, Switch, withRouter } from 'react-router-dom'

import './style.scss'

import wiki from '../../assets/iconfonts/wiki.svg'
import wikiActive from '../../assets/iconfonts/wiki-active.svg'
import hot from '../../assets/iconfonts/hot.svg'
import hotActive from '../../assets/iconfonts/hot-active.svg'

import Seckilllist from '../seckilllist'

class Seckill extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTab: 'wiki'
        }
    }
    render(){
        return(
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                title="限时秒杀"
                key="seckill"
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
                    this.props.history.push('/')
                }}
                >
                <Seckilllist />
                </TabBar.Item>
                <TabBar.Item
                title="品牌特卖"
                key="grandsale"
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
                <div>品牌特卖</div>
                </TabBar.Item>   
            </TabBar>
        )
    }
}
export default Seckill