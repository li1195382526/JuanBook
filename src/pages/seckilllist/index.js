import React, { Component , Fragment} from 'react'

import './style.scss'
import { fetchData } from '../../utils/common.utils'

import { Tabs, WhiteSpace } from 'antd-mobile';

class Seckilllist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seckilllist: []
    }
  }
 

  render() {
    const tabs = [
        { title: '1st Tab' },
        { title: '2nd Tab' },
        { title: '3rd Tab' },
        { title: '4th Tab' },
        { title: '5th Tab' },
        { title: '6th Tab' },
        { title: '7th Tab' },
        { title: '8th Tab' },
        { title: '9th Tab' },
        { title: '10th Tab' },
        { title: '11th Tab' },
      ];
    return (
        <Fragment>
            <div>             
                <Tabs tabBarBackgroundColor='#30363c'
                tabBarActiveTextColor='white' tabBarInactiveTextColor='#6b6b6b' prerenderingSiblingsNumber='2'
                tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                </Tabs>
            </div>
            <div className = 'deadline'>—— 离本场结束仅剩：10时34分56秒 ——</div>
            <ul >
                {
                this.state.seckilllist.map(value => (
                    <li key={value.goods_id} className = 'seckilllist'>
                        <div>
                            <img src={value.pic_url} alt="" style={{width:'100px',height:'100px'}}/>
                        </div>
                        <div>
                            <p className='goodsTitle'>{value.title_long}</p>
                            <p className='price'>
                                限量价:￥<span className='nowPrice'>{value.cprice}</span>
                                <span className='oldPrice'>{value.oprice}</span>
                            </p>
                            <p className='progress'>
                                 <i></i>
                                 <i>{value.progress_info.txt}</i>
                            </p>
                            <input value='马上抢' className='buyNow' />
                        </div>
                    </li>
                ))
                }
            </ul>
        </Fragment>
    )
  }

  async componentDidMount() {
    this.setState({
        seckilllist: (await fetchData('/api/seckilllist')).data.goodslist
    })
  }
}

export default Seckilllist