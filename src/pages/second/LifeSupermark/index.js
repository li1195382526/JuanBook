import React,{ Component,Fragment } from 'react';

import './style.scss';

import PaperCare from '../../../assets/img/5b99e48533b0893e4328bf1e_750x130.png';
// import PaperCare from '../../../assets/img/5b99e48533b0893e4328bf1e_750x130.png';

class Supermark extends Component {
    constructor(props){
        super(props)
        this.state={
            lifeSupermarkList:[]
        }
    }

    render(){
        return (
            <Fragment>
                <div className="lifeSupermark-title">
                    <img src="https://goods7.juancdn.com/act/180913/c/f/5b99e462b6f8ea5fe9592566_750x633.png" />
                </div>

                <div className="lifeSupermark-nav" >
                    <ul>
                        <li className="active" >纸品护洗</li>
                        <li>休闲零食</li>
                        <li>牛奶饮品</li>
                        <li>水果生鲜</li>
                        <li>日用百货</li>
                        <li>美妆护肤</li>
                        <li>母婴用品</li>
                        <li>更多宝贝</li>
                    </ul>
                </div>


                <div className="lifeSupermark-tit" >
                    <div className="lifeSupermark-img" >
                        <img src={PaperCare}  />
                        {/* <img src={PaperCare} /> */}
                    </div>
                    <div className="lifeSupermark-list">
                       {
                            this.state.lifeSupermarkList.map( value => (
                                < div className="lifeSupermark-listN"  key={value.goods_id} >
                                    <img src={value.pic_url} alt="" />
                                    <em>{value.coupon_tips}</em>
                                    <p className="lifeSupermark-eff">{value.title}</p>
                                    <p className="lifeSupermark-price">专享价￥<span>{value.cprice}</span><i>{value.oprice}</i></p>
                                    <button>立即购买</button>
                                </div> 
                            ) )
                       }                       
                    </div>
                </div>
                <div className="lifeSupermark-tit" >
                    <div className="lifeSupermark-img" >
                        <img src={PaperCare} />
                    </div>
                    <div className="lifeSupermark-list">
                       {
                            this.state.lifeSupermarkList.map( value => (
                                < div className="lifeSupermark-listN"  key={value.goods_id} >
                                    <img src={value.pic_url} alt="" />
                                    <em>{value.coupon_tips}</em>
                                    <p className="lifeSupermark-eff">{value.title}</p>
                                    <p className="lifeSupermark-price">专享价￥<span>{value.cprice}</span><i>{value.oprice}</i></p>
                                    <button>立即购买</button>
                                </div> 
                            ) )
                       }                       
                    </div>
                </div>
            </Fragment>
        )
   }
   componentDidMount() {
    

       fetch('/api/list')
           .then(response => response.json())
           .then(result => {
               this.setState({
                    lifeSupermarkList:result.data.goods
               })
           })
    }
}

export default Supermark