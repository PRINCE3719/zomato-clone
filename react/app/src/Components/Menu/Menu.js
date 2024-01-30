import React, { Component } from 'react'
import "./Menu.css"
import red from "./images/red.svg";
import green from "./images/green.svg";



export default class Menu extends Component {
    render() {
        const { MenuData, Value } = this.props;



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
                                                    <p>-</p>
                                                    <p>+</p>
                                                </div>
                                            </div>
                                        </div><hr /></>
                                    ))
                                ) : (
                                    <p>No menu items available</p>
                                )}
                                
                            </div>

                            <div className="modal-footer justify-content-between align-item-center">
                                
                                <h5 id='total'>Subtotal =</h5>
                                <button type="button" className="btn btn-danger">Pay Now</button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}


