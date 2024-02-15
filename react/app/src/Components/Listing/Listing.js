import React, { Component } from 'react'
import Header from '../Hader/Header'
import Cuisines from '../Cuisines'
import {Restdata} from '../Restdata'
import "./Listing.css"

const Murl = "http://localhost:4000/restaurants?mealId=";

export default class Listing extends Component {

  constructor() {
    super()
    this.state = {
      restaurantList: ""
    }
  }

    setDatafilter = (data) =>{
      this.setState({restaurantList:data})
    }



  render() {
    return (

      <div>
        <Header />
        <div className="flex-box">
          <Cuisines mealId = {this.props.match.params.mealId} restCuisine = {(data)=>{
            this.setDatafilter(data)
          }} restCost = {(data)=>{this.setDatafilter(data)}}/>
          <Restdata Rdata ={this.state.restaurantList} /> 
        </div>

      </div>
    )
  }

  componentDidMount() {
    let mealId = this.props.match.params.mealId;
    console.log("helooo",mealId);
    sessionStorage.setItem("MealId",mealId)
    fetch(`${Murl}${mealId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({restaurantList:data})   
      console.log(data);   
    })
  }

}
