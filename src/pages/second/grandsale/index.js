import React,{ Component,Fragment } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import {withRouter} from 'react-router-dom'

import './style.scss'
import { fetchData } from '../../../utils/common.utils';

const renderTabBar = (props) => {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} page={'6'} /></div>}
    </Sticky>);
}
const tabs = [
    { title: '精选' },
    { title: '鞋包配饰' },
    { title: '美妆' },
    { title: '运动' },
    { title: '母婴童装' },
    { title: '居家数码' },
]

class GoodsList extends Component{
  constructor(props){
    super(props)
    this.state = {
      goodslist : []
    }
  }
  render(){
    return(
      <div className='goodslist'>{
        this.state.goodslist.map(value =>(
          <div className='goodsitem' key={value.goods_id}>
            <div><img src={value.pic_url} alt=''/></div>
            <div>{value.cprice}</div>
            <div>{value.title}</div>
          </div>
        ))
      }</div>
    )
  }
  async componentDidMount(){
    this.setState({
      goodslist : (await fetchData(this.props.uri)).data.goods
    })
  }
}

class TabExample extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectlist : [],
      uri : ''
    }
  }
  render(){
    return(
      <div>
      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={tabs}
          initalPage={'t2'} tabBarUnderlineStyle={{color:'#ff4644'}}
          renderTabBar={renderTabBar}
          tabBarActiveTextColor='#ff464e' 
        >        
          <div style={{height: '100%',backgroundColor: '#fff' }} className='grand'>
            {
              this.state.selectlist.map( value =>(              
                <div className='grandlist' key={value.goods_id}>
                  <div>
                    <img src={value.ss_cover} alt=''/>
                  </div>
                  <div>             
                   {value.sub_data.map(function(value2, idx){
                     return (
                     <div className='shoplist' key={idx}>
                        <img src={value2.pic} alt=''/>
                        <p className='price'>
                          <span>{value2.cp}</span>   
                          <span>{value2.op}</span>
                        </p>
                        <p>{value2.title}</p>
                      </div>
                     )
                   })}
                   </div>
                  
                </div>
              ))
            }            
          </div>           
          <div style={{height: '100%', backgroundColor: '#fff' }}>
          <GoodsList uri={'/api/goodslist/shoesbag'}/>
          </div>
          <div style={{height: '100%', backgroundColor: '#fff' }}>
          <GoodsList uri={'/api/goodslist/beauty'}/>
          </div>
          <div style={{height: '100%', backgroundColor: '#fff' }}>
          <GoodsList uri={'/api/goodslist/sport'}/>
          </div>
          <div style={{height: '100%', backgroundColor: '#fff' }}>
          <GoodsList uri={'/api/goodslist/baby'}/>
          </div>
          <div style={{height: '100%', backgroundColor: '#fff' }}>
          <GoodsList uri={'/api/goodslist/sport'}/>
          </div>
        </Tabs>
      </StickyContainer>
      <WhiteSpace />
    </div>
    )
    
  }
  async componentDidMount(){
    this.setState({
      selectlist : (await fetchData('/api/selectlist')).data.goods
    })  
  }   
}

class Grandsale extends Component{
    render(){        
        return(
            <Fragment>
                <div className='grandTop'>
                    <div>
                        <span onClick={this.goHome.bind(this)}> ＜ </span>
                        品牌特卖
                    </div>
                    <div>
                        <TabExample />
                    </div>
                </div>
            </Fragment>
        )
    }
    goHome(){
        this.props.history.push('/')
    }    
}
export default withRouter(Grandsale)