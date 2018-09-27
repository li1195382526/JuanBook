import React, { Component , Fragment} from 'react'
import "./style.scss"
export default class Catelist extends Component {

    constructor(props){
        super(props)
        this.state = {
            catelist : [],
        }
        
        
    }
    
    render(){
      return(
        <Fragment>
          <div className="type-body">
          <div className="type-sousuo"><input placeholder="搜索商品"></input></div>
          <div className="type-left">
            <ul>
              {
                this.state.catelist.map((item,index)=>{
                return <li key={index}>{item.name}</li>               
              })

              }
            </ul>
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
        this.setState({       
            catelist: result.data.goodslist,
        })
      })
      
  }
  


}

