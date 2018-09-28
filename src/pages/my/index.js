import React, { Component, Fragment } from 'react'
// <<<<<<< HEAD
// import { TabBar } from 'antd-mobile';
// import { NavLink } from 'react-router-dom'
// import './style.scss'

// import payment from '../../assets/img/money.png'
// import clouds from '../../assets/img/clock.png'
// import goods from '../../assets/img/do.png'
// import afterSales from '../../assets/img/supermarket.png'
// import Route from 'react-router-dom/Route';
// =======
import { NavLink } from 'react-router-dom'
import './style.scss'

import payment from '../../assets/img/payment.svg'
import clouds from '../../assets/img/clouds.svg'
import goods from '../../assets/img/goods.svg'
import afterSales from '../../assets/img/afterSales.svg'
// >>>>>>> pingxingxianma

class My extends Component {
    render() {
        return (
            <Fragment>
                <div className="my_title">
                    <p><a>&lt;</a>个人中心</p>
                    <div>
                        <h2>注册</h2>
                        <h2>|</h2> 
                        <h2>登录</h2>
                    </div>
                </div>
                <div className="my_nav" >
                    <p><span>我的订单</span><i>全部订单</i></p>
                    <ul className="my_list">
                        <li><NavLink to="/Payment"><div><img src={payment} alt="" /></div><span className="payment">待付款</span></NavLink></li>
                        <li><NavLink to="/Clouds"><div><img src={clouds} alt="" /></div><span className="clouds">待成团</span></NavLink></li>
                        <li><NavLink to="/Goods"><div><img src={goods} alt="" /></div><span className="goods">待收货</span></NavLink></li>
                        <li><NavLink to="/AfterSales"><div><img src={afterSales} alt="" /></div><span className="after-sales">退货/售后</span></NavLink></li>                        
                    </ul>
                </div>

                <div className="my_free">
                    <p>我的优惠卷</p>
                    <p>我的收藏</p>
                    <p>我的拼团</p>
                    <p><span>我的免单卷</span><i>0张</i></p>
                    <p><span>借钱</span><i>新用户免费领1000元</i></p>                   
                </div>

                <div className="my_juanpi">
                    <p>客服中心</p>
                    <p>关于卷皮</p>
                </div>

                <ul className="my_button" >
                    <li onClick={function(){} } >返回首页</li>
                    <li>客户端</li>
                    <li>电脑端</li>
                </ul>
            </Fragment>
        )
    }
}
export default My