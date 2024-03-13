import React, { Component } from 'react'
import "./Menu.css"
import red from "./images/red.svg";
import green from "./images/green.svg";
import { withRouter } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const MUrl = "https://restaurantapi-1.onrender.com";
class Menu extends Component {



    constructor() {
        super()
        this.state = {
            Useritem: {},
            SelectedId: [],
            MealId: sessionStorage.getItem("MealId"),
            SubTotal: 0




        }
    }
    Placeorder = (id) => {
        const { Useritem, SelectedId } = this.state;
        if (Useritem[id]) {
            Useritem[id]++;
        }
        else {
            Useritem[id] = 1;
            SelectedId.push(id);
        }
        this.setState({
            Useritem: Useritem
        })

        this.Subtotal();
    };





    Removeorder = (id) => {
        const { Useritem, SelectedId } = this.state;
        if (Useritem[id] && Useritem[id] > 0) {
            Useritem[id]--;
        }
        this.setState({ Useritem: Useritem })
        if (Useritem[id] === 0) {
            const index = SelectedId.indexOf(id);
            if (index !== -1) {
                SelectedId.splice(index, 1);

            }
        }
        this.Subtotal();
    }




    Subtotal = () => {
        const { MenuData } = this.props;
        const { Useritem } = this.state;
        let subtotal = 0;

        MenuData.forEach((item) => {
            let quantity = Useritem[item.menu_id] || 0;
            this.setState({ Quantity: quantity });
            subtotal += quantity * item.menu_price;
        });

        this.setState({ SubTotal: subtotal }, () => {
   

        });
    };





    Proceed = () => {
        const { SelectedId, SubTotal } = this.state;
        const { Value } = this.props;
        
        sessionStorage.setItem("Meals", SelectedId);
        sessionStorage.setItem("RestName", Value);
        sessionStorage.setItem("cost", SubTotal);
        let session = sessionStorage.getItem("userdata");
        let OGdata = JSON.parse(session);


        fetch(`${MUrl}/menuItem`, {
            method: "POST",
            body: JSON.stringify(SelectedId),
            headers: {
                accept: "application/json",
                "Content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {

                if (this.props.history && OGdata.email) {
                    this.props.history.push(`/placeorder/${Value}`);
                } else {

                    alert("Please Login in to proceed");
                }
                
            })
            .catch(error =>
                toast.error("Please log in! ")
            );




    }




    render() {
        const { MenuData, Value } = this.props;
        const { SubTotal, Useritem } = this.state;

        return (
            <div>

                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" id='red-buttn'>
                    Place Online Order
                </button>


                <div className="modal fade modalopen" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{Value}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {MenuData && MenuData.length > 0 ? (
                                    MenuData.map((item) => (
                                        <><div className='menu-div'>
                                            <div className='menu-name'>
                                                <img src={item.menu_type === "vegetarian" ? green : red} alt='ve' id='typ'></img>
                                                <h6 id='name'>{item.menu_name}</h6>
                                                <p id='cost'>Rs. {item.menu_price}</p>
                                                <p id='desc'>{item.description}</p>
                                            </div>
                                            <div className='menu-img'>
                                                <img src={item.menu_image} alt="menu" id='image'></img>
                                                <div className='add-butn'>
                                                    <p id='minus' onClick={() => { this.Removeorder(item.menu_id) }}>-</p>
                                                    {Useritem[item.menu_id] || 0}
                                                    <p id='plus' onClick={() => { this.Placeorder(item.menu_id) }}>+</p>
                                                </div>
                                            </div>
                                        </div><hr /></>
                                    ))
                                ) : (
                                    <p>No menu items available</p>
                                )}

                            </div>

                            <div className="modal-footer justify-content-between align-item-center">

                                <h5 id='total'>Subtotal =Rs.{SubTotal}</h5>

                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={this.Proceed}>Pay Now</button>
                                


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}
export default withRouter(Menu);


