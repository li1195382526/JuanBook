import React, { Component , Fragment} from 'react'
import "./style.scss"
import { Tabs } from 'antd-mobile';
export default class Catelist extends Component {

    constructor(props){
        super(props)
        this.state = {
            catelist : [],
            tabs : [
              { title: '女装' },
              { title: '男装' },
              { title: '母婴' },
              { title: '鞋子' },
              { title: '箱子' },
              { title: '居家百货' },
              { title: '美妆' },
              { title: '美食' },
              { title: '户外运动' }
            
            ]
        }
        
        
    }
    
    render(){
      return(
        <Fragment>
          <div className="type-body">
          <div className="type-sousuo"><input placeholder="搜索商品"></input></div>
          <div className="type-left">
          <Tabs tabs={this.state.tabs}
            initalPage={'t2'}
            tabBarPosition="left"
            tabDirection="vertical"
          >
            <div style={{   backgroundColor: '#fff' }}>
                <ul className="type_class">
                {this.state.catelist.map(value => (
                  value.secondCateList.map(value =>(
                     <li className = "type_cloth" key={value.id}>
                  <div className = "type_img"><img src = {"http://placehold.it/60x60"} alt=""/></div>
                  <p>{value.name}</p></li>
                  ))
                 
                ))}
                </ul>
            </div>
            <div>
            <ul className="type_class">
                {this.state.catelist.map(value => (
                  value.secondCateList.map(value =>(
                     <li className = "type_cloth" key={value.id}>
                  <div className = "type_img"><img src = {"http://placehold.it/60x60"} alt=""/></div>
                  <p>{value.name}</p></li>
                  ))
                 
                ))}
                </ul>
            </div>
            
            <div>
            <ul className="type_class">
                {this.state.catelist.map(value => (
                  value.secondCateList.map(value =>(
                     <li className = "type_cloth" key={value.id}>
                  <div className = "type_img"><img src = {"http://placehold.it/60x60"} alt=""/></div>
                  <p>{value.name}</p></li>
                  ))
                 
                ))}
                </ul>
            </div>


             <div>
            <ul className="type_class">
                {this.state.catelist.map(value => (
                  value.secondCateList.map(value =>(
                     <li className = "type_cloth" key={value.id}>
                  <div className = "type_img"><img src = {"http://placehold.it/60x60"} alt=""/></div>
                  <p>{value.name}</p></li>
                  ))
                 
                ))}
                </ul>
            </div>



             <div>
            <ul className="type_class">
                {this.state.catelist.map(value => (
                  value.secondCateList.map(value =>(
                     <li className = "type_cloth" key={value.id}>
                  <div className = "type_img"><img src = {"http://placehold.it/60x60"} alt=""/></div>
                  <p>{value.name}</p></li>
                  ))
                 
                ))}
                </ul>
            </div>



             <div>
            <ul className="type_class">
                {this.state.catelist.map(value => (
                  value.secondCateList.map(value =>(
                     <li className = "type_cloth" key={value.id}>
                  <div className = "type_img"><img src = {"http://placehold.it/60x60"} alt=""/></div>
                  <p>{value.name}</p></li>
                  ))
                 
                ))}
                </ul>
            </div>


             <div>
            <ul className="type_class">
                {this.state.catelist.map(value => (
                  value.secondCateList.map(value =>(
                     <li className = "type_cloth" key={value.id}>
                  <div className = "type_img"><img src = {"http://placehold.it/60x60"} alt=""/></div>
                  <p>{value.name}</p></li>
                  ))
                 
                ))}
                </ul>
            </div>

             <div>
            <ul className="type_class">
                {this.state.catelist.map(value => (
                  value.secondCateList.map(value =>(
                     <li className = "type_cloth" key={value.id}>
                  <div className = "type_img"><img src = {"http://placehold.it/60x60"} alt=""/></div>
                  <p>{value.name}</p></li>
                  ))
                 
                ))}
                </ul>
            </div>

             <div>
            <ul className="type_class">
                {this.state.catelist.map(value => (
                  value.secondCateList.map(value =>(
                     <li className = "type_cloth" key={value.id}>
                  <div className = "type_img"><img src = {"http://placehold.it/60x60"} alt=""/></div>
                  <p>{value.name}</p></li>
                  ))
                 
                ))}
                </ul>
            </div>


          </Tabs>
          </div>
          <div className="type-right">
             
          </div>
          </div>
          </Fragment>
      )
    }
    
  componentDidMount() {     
    fetch('/api/catelist')
      .then(response => response.json())
      .then(result => {
        console.log(result.data.goodslist)
        this.setState({       
            catelist: result.data.goodslist
        })
      })
      
  }
  
}

