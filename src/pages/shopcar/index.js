import React from 'react'
import { Tabs, WhiteSpace,WingBlank} from 'antd-mobile';

import './style.scss';
import goback from '../../assets/iconfonts/返回.svg'
import taobao from '../../assets/iconfonts/淘宝.svg'
import weibo from '../../assets/iconfonts/微博.svg'
import huoche from '../../assets/iconfonts/货车.svg'
import sousuo from '../../assets/iconfonts/搜索.svg'
import seven from '../../assets/iconfonts/数字7.svg'
import qq from '../../assets/iconfonts/qq.svg'

const tabs = [
  { title: '卷皮账号登陆' },
  { title: '手机快捷登陆' }
]

   
const TabExample = () => (

     
    <div className='shop-body'>
      <WhiteSpace />
      <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
         <div className="shop-login1-1">
             <p><input  placeholder='手机号/邮箱/用户名'/></p>
             <p><input  placeholder='密码'/></p>
         </div>
         <div className='shop-login1-2'>
             <p><input  placeholder='请输入手机号码'/></p>
             <p><input  placeholder='请输入验证码'></input><span>获取验证码</span></p>
         </div>      
      </Tabs>
      <WingBlank className='shop-login'>登陆</WingBlank>
      <p className='shop-checkbox'><input  type='checkbox'/>两周内免登录<a>忘记密码?</a></p> 
             
         <div className='footer'>
             <p className='footer-1'>第三方账号快速登陆</p>
             <p className='footer-2'>
             <i style={{width:'40px',height:'40px', borderRadius:'50%', border: '1px solid #f6f6f6',
            display:'inline-block', background:`url(${qq}) center center / 30px 30px no-repeat`}}></i>
              <i style={{width:'40px',height:'40px', borderRadius:'50%', border: '1px solid #f6f6f6',
            display:'inline-block', background:`url(${taobao}) center center / 30px 30px no-repeat`}}></i>
              <i style={{width:'40px',height:'40px', borderRadius:'50%', border: '1px solid #f6f6f6',
            display:'inline-block', background:`url(${weibo}) center center / 30px 30px no-repeat`}}></i>
            </p>
            
             <p className='footer-3'>
                <span>
                <i style={{width:'20px',height:'20px', borderRadius:'5px', border: '1px solid #dbdbdb',
            display:'inline-block', background:`url(${huoche}) center center / 15px 15px no-repeat`}}></i>
                全场包邮</span>
                <span>
                <i style={{width:'20px',height:'20px', borderRadius:'5px', border: '1px solid #dbdbdb',
            display:'inline-block', background:`url(${sousuo}) center center / 15px 15px no-repeat`}}></i>
                100%人工质检</span>
                <span>
                <i style={{width:'20px',height:'20px', borderRadius:'5px', border: '1px solid #dbdbdb',
            display:'inline-block', background:`url(${seven}) center center / 15px 15px no-repeat`}}></i>
                    7天放心退</span>
                </p>
         </div>
      <WhiteSpace />
    </div>
  );

class Shop extends React.Component{
  
   render(){
       return(
           <div>
               <a className="shop-goload"><img alt="下载APP" src={require("../../assets/img/go_load_new.png")}></img></a>
               <div className="shop-top">
                  <a className="shop-top-goback" style={{
                  background:`url(${goback}) center center /  21px 21px no-repeat` }}></a>
                  <span>登陆</span>
                  <a>注册</a>
               </div>
               <div>
                <TabExample/>
               </div>
           </div>
       )
   }


}

export default Shop