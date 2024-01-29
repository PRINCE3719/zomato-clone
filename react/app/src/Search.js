import React, { Component } from 'react'
import "./Search.css"

const LUrl = "http://localhost:4000/locations";
const RUrl = "http://localhost:4000/restaurants?state_id=";

export default class Search extends Component {

    constructor(){
        super()
        this.state = {
            locatioN : "",
            restaurant: "",
        }
    }


    RenderLocation = (data) =>{
        if(data){
            return data.map((item)=>{
                return(
                    <option key={item._id} value={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    handleCity = (event) =>{
        const stateId = event.target.value;
        console.log(stateId);
        fetch(`${RUrl}${stateId}`,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            this.setState({restaurant:data})})
        
    }

    renderRest = (data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option key={item._id} value={item.restaurant_id}>{item.restaurant_name}</option>
                )
            })
        }
    }

    render() {
        return (
            <div className="first-half">
                <div className="buttons">
                    <button id="login">Login</button>
                    <button id="account">Create an account</button>
                </div>
                <div className="circle">
                    <h2>e!</h2>
                </div>
                <h2 id="heading">Find the best restaurants,cafes, and bars</h2>
                <div className="searchbar">
                    <div id="location">
                        <div className="row text-center centre">
                            <div className="col-2 sm-4">
                                <select onChange={this.handleCity}>
                                    <option disabled selected>Please type a Location</option>
                                {this.RenderLocation(this.state.locatioN)}
                                </select>
                            </div>
                            <div className="col-3 sm-5">
                                <select id='selct-second'>
                                    <option disabled selected>Search for restaurants</option>
                                    {this.renderRest(this.state.restaurant)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    componentDidMount() {
        fetch(LUrl, { method: "GET" })
            .then((res) => res.json())
            .then((data) => this.setState({locatioN:data}))
    }
}
