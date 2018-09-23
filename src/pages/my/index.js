import React, { Component, Fragment } from 'react'
// import { TabBar } from 'antd-mobile';
import { NavLink } from 'react-router-dom'
import './style.scss'

import payment from '../../assets/img/money.png'
import clouds from '../../assets/img/clock.png'
import goods from '../../assets/img/do.png'
import afterSales from '../../assets/img/supermarket.png'
// import Route from 'react-router-dom/Route';

class My extends Component {
    render() {
        return (
            <Fragment>
                <div className="title">
                    <p><a>&lt;</a><span>个人中心</span></p>
                    <h2>注册</h2>
                    <h2>登录</h2>
                </div>
                <div className="nav" >
                    <p><span>我的订单</span><i>全部订单</i></p>
                    <ul className="list">
                        <li /*onClick={(el,index)=>{
                            this.props.history.push("/Payment")
                        }}*/ ><NavLink to="/Payment"><div className="payment"><div className="payment"><img src={payment} alt="" /></div>待付款</div></NavLink></li>
                        <li><NavLink to="/Clouds"><div className="clouds"><div className="clouds"><img src={clouds} alt="" /></div>待成团</div></NavLink></li>
                        <li><NavLink to="/Goods"><div className="goods"><div className="goods"><img src={goods} alt="" /></div>待收货</div></NavLink></li>
                        <li><NavLink to="/AfterSales"><div className="after-sales"><div className="after-sales"><img src={afterSales} alt="" /></div>退货/售后</div></NavLink></li>                        
                    </ul>
                </div>
            </Fragment>
        )
    }
}
export default My
// export default withRouter(My) 