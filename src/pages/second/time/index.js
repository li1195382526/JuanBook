import React ,{ Component } from 'react'
import { TabBar} from 'antd-mobile'

import './style.scss'

import wiki from '../../../assets/iconfonts/wiki.svg'
import wikiActive from '../../../assets/iconfonts/wiki-active.svg'
import hot from '../../../assets/iconfonts/hot.svg'
import hotActive from '../../../assets/iconfonts/hot-active.svg'

import Timelist from '../timelist'
import Grandsele from '../grandsale'

class Time extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTab: 'grandsale'
        }
    }
    componnentWillReceiveProps(){
        console.log(0)
    }
    componentDidMount() {
        console.log(this.props.match)
        this.setState({
            selectedTab: this.props.match.params.id
        })
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
                selected={this.state.selectedTab === 'seckill'}
                onPress={() => {
                    this.setState({
                    selectedTab: 'seckill',
                    })
                }}
                >
                <Timelist />
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
                selected={this.state.selectedTab === 'grandsale'}
                onPress={() => {
                    this.setState({
                    selectedTab: 'grandsale',
                    });
                }}
                >
                <Grandsele/>
                </TabBar.Item>   
            </TabBar>
        )
    }
}
export default Time