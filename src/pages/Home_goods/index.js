import React,{ Component } from 'react'

import './style.scss'
import { Carousel} from 'antd-mobile';
import { Tabs } from 'antd-mobile';

class Home_goods extends Component {
    constructor(props){
        super(props);
        this.state={
            imgHeight: 320,
            goods:[],
            tabs : [
                { title: '图文详情 '},
                { title: '商品参数' },
                { title: '咨询与售后' },
              ]
        }
    }
   render(){
       return (
           <div>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.goods.map(value => (
                        <div key={value.av_origin_zpic}>
                        {/* <img className="swiper-item" src={value.av_zpic} alt=""/> */}
                        <img
                            src={value.av_zpic}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </div>
                    ))}
                </Carousel>
                <div className="goodsMsg" >
                {/* {this.state.goods.map(value => ( */}
                    <div className = "goodsSum">
                        <span className = "goodsMsg1">￥39.9</span>
                        <del>￥199</del>
                        <span className = "goodsMsg2">包邮</span>
                        <span className = "goodsMsg3">2172人已购</span>
                    </div>
                    <div>
                        <p className = "goodsMsg4">纯色长袖T恤宽松V领</p>
                        {/* <img src = {} alt=""/> */}
                    </div>
                     {/* ))} */}
                </div>
                <div className = "afterSale">
                    <ul>
                        <li>24小时发货</li>
                        <li>7天包退</li>
                        <li>售后补贴</li>
                        <li>...</li>
                    </ul>
                </div>
                <div className = "change">
                    <p>已选择：蓝色XXL</p>
                </div>
                <div className = "shopName">
                    纤艺女装旗舰店
                </div>

             <Tabs tabs={this.state.tabs}
                    initalPage={'t2'}
                    
                > 
                    <div style={{ backgroundColor: '#fff' }}>
                        <img className="imgMSg" src={ "https://goods6.juancdn.com/goods/180811/b/5/5b6e831c33b0897b2d7b4fe8_790x1096.jpg"} alt=""/>
                        <img className="imgMSg" src={"https://goods2.juancdn.com/goods/180811/2/a/5b6e831e33b0897c2b64f4b5_790x1096.jpg"} alt=""/>
                        <img className="imgMSg" src={"https://goods8.juancdn.com/goods/180811/e/6/5b6e8320b6f8ea7a4f716b80_790x1096.jpg"} alt=""/>
                        <img className="imgMSg" src={"https://goods2.juancdn.com/goods/180811/2/b/5b6e8322b6f8ea09e73aacb8_790x1262.jpg"} alt=""/>
                        <img className="imgMSg" src={"https://goods8.juancdn.com/goods/180811/e/1/5b6e831bb6f8ea7145676267_790x1434.jpg"} alt=""/>
                        <img className="imgMSg" src={"https://goods7.juancdn.com/goods/180811/d/1/5b6e833cb6f8ea7c72479969_790x1146.jpg"} alt=""/>
                        <img className="imgMSg" src={"https://goods7.juancdn.com/goods/180811/c/2/5b6e8341b6f8ea0afb5045d7_790x1360.jpg"} alt=""/>
                        <img className="imgMSg" src={"https://goods4.juancdn.com/goods/180811/6/b/5b6e8354b6f8ea7cc15841d7_790x1030.jpg"} alt=""/>
                        <img className="imgMSg" src={"https://goods5.juancdn.com/goods/180811/8/9/5b6e835533b0897e9553db43_790x1116.jpg"} alt=""/>
                        
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                        <ul className = "ulList">
                            <li>常用快递<span>申通快递</span></li>
                            
                            <li>运费<span>全国包邮(偏远地区除外)</span></li>
                            
                            <li>主材质<span>棉</span></li>
                            
                            <li>厚薄<span>常规</span></li>
                            
                            <li>衣长<span>短款</span></li>
                            
                            <li>领子<span>荷叶领</span></li>
                            
                            <li>袖型<span>荷叶袖</span></li>
                           
                            <li>尺码<span>S,M,L,XL,2XL</span></li>
                            
                            <li>成分含量<span>81%(含)-90%(含)</span></li>
                            
                            <li>上市年份<span></span></li>
                            
                            <li>上市季节<span>2018年</span></li>
                            <li>款式风格<span>通勤（OL）</span></li>
                 
                            <li>潮流<span>韩系</span></li>
                            
                            <li>版型<span>直筒</span></li>
                            
                        </ul>
                    {/* <div className="sc-cmTdod iWIGnm">
                        <div className="sc-btzYZH kWDlmE">领型</div>
                            <div className="sc-lhVmIH ktQXwn">其他</div></div>
                            <div className="sc-jwKygS cSjZps">
                            <div className="sc-btzYZH kWDlmE">款式风格</div>
                            <div className="sc-lhVmIH ktQXwn">通勤（OL）</div>
                            </div><div className="sc-jwKygS cSjZps">
                            <div className="sc-btzYZH kWDlmE">潮流</div>
                            <div className="sc-lhVmIH ktQXwn">韩系</div></div>
                            <div className="sc-jwKygS cSjZps">
                            <div className="sc-btzYZH kWDlmE">版型</div>
                            <div className="sc-lhVmIH ktQXwn">直筒</div>
                            </div></div> */}
                    </div>
                    <div style={{  backgroundColor: '#fff' }}>
                        <div className = "call">
                            <p className = "call1">在卷皮购物有哪些服务保障</p>
                            <p className = "call2">卷皮为您提供"人工检质","闪电发货","精选品牌","7天无理由退货","退货返运费"等服务，放您轻松购物有保障</p>
                        </div>
                        <div className = "call">
                            <p className = "call1">在卷皮购物有哪些服务保障</p>
                            <p className = "call2">卷皮为您提供"人工检质","闪电发货","精选品牌","7天无理由退货","退货返运费"等服务，放您轻松购物有保障</p>
                        </div>
                        <div className = "call">
                            <p className = "call1">在卷皮购物有哪些服务保障</p>
                            <p className = "call2">卷皮为您提供"人工检质","闪电发货","精选品牌","7天无理由退货","退货返运费"等服务，放您轻松购物有保障</p>
                        </div>
                        <div className = "call">
                            <p className = "call1">在卷皮购物有哪些服务保障</p>
                            <p className = "call2">卷皮为您提供"人工检质","闪电发货","精选品牌","7天无理由退货","退货返运费"等服务，放您轻松购物有保障
                            放您轻松购物有保障</p>
                        </div>
                        <div className = "call">
                            <p className = "call1">在卷皮购物有哪些服务保障</p>
                            <p className = "call2">卷皮为您提供"人工检质","闪电发货","精选品牌","7天无理由退货","退货返运费"等服务，放您轻松购物有保障,
                            放您轻松购物有保障</p>
                        </div>
                        <div className = "call">
                            <p className = "call1">在卷皮购物有哪些服务保障</p>
                            <p className = "call2">卷皮为您提供"人工检质","闪电发货","精选品牌","7天无理由退货","退货返运费"等服务，放您轻松购物有保障,
                            放您轻松购物有保障</p>
                        </div>
                        <div className = "call">
                            <p className = "call1">在卷皮购物有哪些服务保障</p>
                            <p className = "call2">卷皮为您提供"人工检质","闪电发货","精选品牌","7天无理由退货","退货返运费"等服务，放您轻松购物有保障,
                            放您轻松购物有保障</p>
                        </div>
                        <div className = "call">
                            <p className = "call1">在卷皮购物有哪些服务保障</p>
                            <p className = "call2">卷皮为您提供"人工检质","闪电发货","精选品牌","7天无理由退货","退货返运费"等服务，放您轻松购物有保障</p>
                        </div>
                    </div>
            </Tabs>


           </div>
       )
   }
   componentDidMount(){
    fetch('/api/goods')
    .then(response => response.json())
    .then(result => {
      console.log(result.skudata.sku)
      this.setState({
        goods: result.skudata.sku
      })
    })
   }
}

export default Home_goods
