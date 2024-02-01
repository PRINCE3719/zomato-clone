import React, { Component } from 'react'
import "./Registration.css"
import Header from '../Hader/Header'

export default class Registration extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='register-main'>
          <h2 className='regi-head'>Register</h2>
          <div className='register-fields'>
            <label>Firstname</label>
            <input type='text' id='firstname' placeholder='enter your firstname'/>
            <label>Email</label>
            <input type='email' id='emaiol' placeholder='enter your email'/>
            <label>Phone</label>
            <input type='text' id='number' autoComplete='off' placeholder='enter yourt phone no'/>
            <label>Password</label>
            <input type='text' id='passwrd' placeholder='enter your password'/>
            <button className='regi-butnn'>Register</button>
          </div>
        </div>
      </div>
    )
  }
}
