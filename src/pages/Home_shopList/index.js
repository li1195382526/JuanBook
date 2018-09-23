import React,{ Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './style.scss'

import img1 from '../../assets/img/12.gif'
import { Tabs } from 'antd-mobile';
import { Grid } from 'antd-mobile';

class Home_shopList extends Component {
    constructor(props){
        super(props);
        this.state={
            goodsList1:[],
            goodsList2:[],
         tabs : [
                { title: '推荐' },
                { title: '价格' },
                { title: '销量' },
                { title: '筛选' },
                { title: '筛选' }
              ]
        }
    }
   render(){
       return (
           
           <div className = "goodsList4">
           {/* 头部 */}
              <NavBar
                mode="light"
                icon={<Icon type="left" />}
                
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                onClick={()=>{
                    // console.log(dataItem.id)
                    this.props.history.push('/')
              }
              }
                >{this.state.goodsList1.shop_name}</NavBar>
                {/* 专场 */}
                <div className = "Home_banner">
                    <div className = "Home_box">
                        <div className = "logo"><img src = {this.state.goodsList1.logo_url} alt=""/></div>
                        <div className = "logoName"><p>{this.state.goodsList1.shop_name}</p>
                        
                        <p className = "shopNum">{this.state.goodsList1.store_info}</p></div>
                        <div className = "img1"><img src ={img1}  alt=""/></div>
                    </div>
                    <div className = "full">
                        <span>满件减</span>
                    </div>   
                    <span style={{display:'block',float:'left',fontSize:'12px'}}>满两件减8元</span> 
                </div>

                {/* 专场列表商品 */}
                <Tabs tabs={this.state.tabs} initialPage={2} animated={false} useOnPan={false}
                distanceToChangeTab="0.2" 
                tabBarActiveTextColor="red"
            
                >
                    <div style={{ backgroundColor: '#fff' }}>


                         <Grid data={this.state.goodsList2}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ width:'200px',height:'270px' }} 
                                onClick={()=>{
                                    
                                    this.props.history.push('/Home_goods')
                                }
                                }>
                                <img src={dataItem.icon} style={{ width: '200px', height: '200px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span className = "discount">￥{dataItem.cprice}</span>
                                    <p>{dataItem.text}</p>
                                </div>
                                </div>
                            )}
                            />
                    </div>
                    <div style={{  backgroundColor: '#fff' }}>
                    <Grid data={this.state.goodsList2}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ width:'159px',height:'270px' }} 
                                onClick={()=>{
                                    // console.log(dataItem.id)
                                    this.props.history.push('/Home_goods',{id:dataItem.id})
                                }
                                }>
                                <img src={dataItem.icon} style={{ width: '200px', height: '200px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span className = "discount">￥{dataItem.cprice}</span>
                                    <p>{dataItem.text}</p>
                                </div>
                                </div>
                            )}
                            />
                    </div>
                    <div style={{  backgroundColor: '#fff' }}>
                    <Grid data={this.state.goodsList2}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ width:'159px',height:'270px' }} 
                                onClick={()=>{
                                    // console.log(dataItem.id)
                                    this.props.history.push('/Home_goods',{id:dataItem.id})
                                }
                                }>
                                <img src={dataItem.icon} style={{ width: '200px', height: '200px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span className = "discount">￥{dataItem.cprice}</span>
                                    <p>{dataItem.text}</p>
                                </div>
                                </div>
                            )}
                            />
                    </div>
                    <div style={{  backgroundColor: '#fff' }}>
                    <Grid data={this.state.goodsList2}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ width:'159px',height:'270px' }} 
                                onClick={()=>{
                                    // console.log(dataItem.id)
                                    this.props.history.push('/Home_goods',{id:dataItem.id})
                                }
                                }>
                                <img src={dataItem.icon} style={{ width: '200px', height: '200px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span className = "discount">￥{dataItem.cprice}</span>
                                    <p>{dataItem.text}</p>
                                </div>
                                </div>
                            )}
                            />
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                    <Grid data={this.state.goodsList2}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{ width:'159px',height:'270px' }} 
                                onClick={()=>{
                                    // console.log(dataItem.id)
                                    this.props.history.push('/Home_goods',{id:dataItem.id})
                                }
                                }>
                                <img src={dataItem.icon} style={{ width: '200px', height: '200px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span className = "discount">￥{dataItem.cprice}</span>
                                    <p>{dataItem.text}</p>
                                </div>
                                </div>
                            )}
                            />
                    </div>
                    </Tabs>
           </div>
            
       )
      
   }
   componentDidMount(){
    fetch('/api/goodsList1')
    .then(response => response.json())
    .then(result => {
      this.setState({
        goodsList1: result.brandInfo
      })
    }) 

    fetch('/api/goodsList1')
    .then(response => response.json())
    .then(result => {
      console.log(result.goods)
      this.setState({
        goodsList2: result.goods.map(value => (
          {
            icon: value.pic_url,
            text: value.title,
            cprice:value.cprice,
            oprice:value.oprice,
            id:value.shop_id
          }
        ))
      })
    })
}
}

export default Home_shopList