import React, { Component } from 'react'
import "./Quick.css"
import {SearchDisplay} from './SearchDisplay';

const QUrl = "https://restaurantapi-1.onrender.com/mealtype";

export default class Quick extends Component {

    constructor() {
        super()
        this.state = {
            mealType: "",
        }
    }
    render() {
        return (
            <div>
                <div className="second-part">
                    <h3>Quick Searches</h3>
                    <p>Discover restaurants by type of meal</p>
                    <SearchDisplay mealData = {this.state.mealType}/>
                </div>
            </div>
        )
    }


    componentDidMount() {
        fetch(QUrl, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ mealType: data })
            })
    }
}
