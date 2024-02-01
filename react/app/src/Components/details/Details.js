import React, { Component } from 'react'
import Header from '../Hader/Header'
import './Details.css'
import PlaceTabs from '../PlaceTabs'
import axios from 'axios';


const dUrl = "http://localhost:4000"
export default class Details extends Component {
  
  constructor(){
    super()
    this.state = {
        RestDetail :"",
        Menulist:"",
        userItem:"",
        
    }
  }

  

 



  

  render() {

    let {RestDetail} = this.state;
    
    return (
      <div>
        <Header/>
        <div className='main-center'>
        
            <img src={RestDetail.restaurant_thumb} className='image-rest' alt="No Image Found"/>
        </div>
        <div className='down-div'>
            <h2>{RestDetail.restaurant_name}</h2>
            <div className='tabs-div'>
            <PlaceTabs Tabdata ={this.state.RestDetail} MenuList = {this.state.Menulist} />
            
            </div>
        </div>
      </div>
    )
  }

  async componentDidMount(){
    let RId = this.props.location.search.split("=")[1];

    let res = await axios.get(`${dUrl}/details/${RId}`, {method:"GET "})
    console.log(res.data);
    let menuData = await axios.get(`${dUrl}/menu/${RId}`,{method:"GET"})
        this.setState({RestDetail:res.data[0],Menulist:menuData.data})
  }

}

