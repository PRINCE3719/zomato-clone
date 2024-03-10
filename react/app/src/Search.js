import React, { Component } from 'react'
import "./Search.css"
import { withRouter } from 'react-router-dom';
import {Link} from "react-router-dom";


const LUrl = "https://restaurantapi-1.onrender.com/locations";
const RUrl = "https://restaurantapi-1.onrender.com/restaurants?state_id=";

 class Search extends Component {

    constructor() {
        super()
        this.state = {
            locatioN: "",
            restaurant: "",
            token:"",
            Name:""
           
        }
    }


    RenderLocation = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item._id} value={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    handleCity = (event) => {
        const stateId = event.target.value;
        console.log(stateId);
        fetch(`${RUrl}${stateId}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ restaurant: data })
            })

    }


    renderRest = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item._id} value={item.restaurant_id}>
                     {item.restaurant_name}
                    </option>

                )
            })
        }
    }

    handleRestaurantSelect = (e)=>{
        const restid = e.target.value;
        this.props.history.push(`/details?restId=${restid}`);
    }

    Logout=()=>{
       sessionStorage.removeItem("token");
        
    }


    Rendercondition=()=>{
        if(this.state.token){
           
            return(
                <div className='buttons'>
                <div className='logout-butuns'>
                    <div className='profile-name'>Hi,{this.state.Name}</div>
                    <Link to="/Login "><button className='sign-out' onClick={this.Logout}>Log out</button></Link>
                </div>
                </div>
            )
            
        }
        else{
            return(
                <div className="buttons">
            <Link to="/Login"><button id="login">Login</button></Link>
            <Link to="/Register"><button id="account">Create an account</button></Link>
        </div>
            )
            
        }
    }




    render() {
        
        return (
            <div className="first-half">
                {this.Rendercondition()}
                <div className="circle">
                    <h2>e!</h2>
                </div>
                <h2 id="heading">Find the best restaurants,cafes, and bars</h2>
                <div className="searchbar">
                    <div id="location">
                        <div className="row text-center justify-content-center">
                            <div className="col-md-2">
                                <select onChange={this.handleCity}>
                                    <option disabled selected>Please type a Location</option>
                                    {this.RenderLocation(this.state.locatioN)}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <select id='selct-second'  onChange={this.handleRestaurantSelect}>
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
            .then((data) => this.setState({ locatioN: data }))
            let tokvalue = sessionStorage.getItem("token");
            
            this.setState({ token: tokvalue}, () => {
                console.log(this.state.token);
               
           
            });

            let user = localStorage.getItem("userName");
            this.setState({Name:user})

    }
 
    


}
export default withRouter(Search)
