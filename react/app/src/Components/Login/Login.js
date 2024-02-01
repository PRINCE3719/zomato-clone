import React, { Component } from 'react'
import "./Login.css"
import Header from '../Hader/Header'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='Login-cont'>
        <h2 id='login-capt'>Login</h2>
        <div className='login-fields'>
            <label id='labels'>Email</label>
        <input type='text' id='email' placeholder='enter your email' autoComplete='off'/>
        <label id='labels'>Password</label>
        <input type='password' id='pass' placeholder='enter your password'></input>
        <button className='login-butnn'>Login</button>
        </div>
      </div>
      </div>

    )
  }
}




