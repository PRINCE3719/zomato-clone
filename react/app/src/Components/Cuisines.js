import React, { Component } from 'react'
import "./Cuisines.css"
import axios, { Axios } from "axios"

const Lurl = "http://localhost:4000/filter";

export default class Cuisines extends Component {


    filterCuisnes = (event) => {
        let cuisineid = event.target.value;
        let mealID = this.props.mealId;
        console.log("youuuuu", mealID);
        console.log("cuisine", cuisineid);
        let cuisineUrl;
        if (!cuisineid) {
            cuisineUrl = `${Lurl}/${mealID}`;
        }
        else {
            cuisineUrl = `${Lurl}/${mealID}?cuisineId=${cuisineid}`;
        }

        axios.get(cuisineUrl)
        .then((res)=>{
            console.log(res.data)
            this.props.restCuisine(res.data)
        })
    }


    filterCost = (event)=>{
        let mealId = this.props.mealId;
        let cost = event.target.value.split("-");
        console.log(cost);
        let costUrl;
        let lcost = cost[0];
        let hcost = cost[1];
        console.log("low",lcost,"high",hcost);

        if(event.target.value === ""){
            costUrl = `${Lurl}/${mealId}`
        }
        else{
            costUrl = `${Lurl}/${mealId}?lcost=${lcost}&hcost=${hcost}`;
        }

        axios.get(costUrl)
        .then((res)=>{
            console.log("all datas",res.data);
            this.props.restCost(res.data)
        })
    }
    render() {
        return (
            <div className="sidebar">
                <h4 id="filter">Filters</h4>
                <div className="side-menu">
                    <p id="cuisine-head">Cuisine</p>
                    <div className="radio-div" onChange={this.filterCuisnes}>
                        <div className="radio">
                            <input type="checkbox" value="1" id="north" />
                            <label for="north">North Indian</label><br />
                        </div>

                        <div className="radio">
                            <input type="checkbox" value="2" id="south" />
                            <label for="south">South Indian</label><br />
                        </div>
                        <div className="radio">
                            <input type="checkbox" value="3" id="chinese" />
                            <label for="Chinese">Chinese</label><br />
                        </div>
                        <div className="radio">
                            <input type="checkbox" value="4" id="fast" />
                            <label for="fast">Fast Food</label><br />
                        </div>
                        <div className="radio">
                            <input type="checkbox" value="5" id="street" />
                            <label for="street">Street Food</label><br />
                        </div>
                    </div>
                </div>
                <div className="side-menu2">
                    <div className="radio-div" onChange={this.filterCost}>
                        <p id='text'>Cost For two</p>
                        <div className='radio'>
                            <input type="radio" value="100-300" name="cost" />
                            <label>100 to` 300</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" value="301-500" name="cost" />
                            <label>` 301 to ` 500</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" value="501-1000" name="cost" />
                            <label>` 501 to ` 1000</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" value="1001-2000" name="cost" />
                            <label>` 1001 to ` 2000</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" value="2001-2500" name="cost" />
                            <label>` 2001+</label>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
