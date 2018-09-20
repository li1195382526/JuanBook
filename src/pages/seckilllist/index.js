import React, { Component , Fragment} from 'react'

import './style.scss'
import { fetchData } from '../../utils/common.utils'

import { Tabs } from 'antd-mobile';

class Seckilllist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seckilllist: []
    }
  }
 

  render() {
    const tabs = [       
        { title: '抢购中' },
        { title: '抢购中' },
        { title: '抢购中' },
        { title: '抢购中' },
        { title: '抢购中' },
        { title: '抢购中' }
      ];
    return (
        <Fragment>
            <div className = "timebar">             
                <Tabs tabBarBackgroundColor='#30363c'
                tabBarActiveTextColor='white' tabBarInactiveTextColor='#6b6b6b' 
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
                                 <i style={{width:'20%'}}></i>
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