import React, { Component } from 'react'
import Header from '../Hader/Header'
import "./Placeorder.css"

export default class Placeorder extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className='mid-container'>
                        <h5 id='head-rest'>restaurant name</h5>
                        <div className='all-fields'>
                        <label>Name</label>
                        <input type='text' id='name-field' placeholder='Enter your name'/>
                        <label>Mobile Number</label>
                        <input type='text' id='Number-field' placeholder='Enter your number'/>
                        <label>Address</label>
                        <textarea  id='adress-field' placeholder='Enter your Address' rows={5}/>
                        </div>
                        <div className='butn-footer'>
                        <h5>Total Price:</h5>
                        <button>PROCEED</button>
                        </div>
                      
                    </div>
                </div>
            </div>
        )
    }
}
