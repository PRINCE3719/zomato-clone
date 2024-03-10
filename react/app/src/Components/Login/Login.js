import React, { Component } from 'react'
import "./Login.css"
import Header from '../Hader/Header'

const Lurl = "https://login-app-fm0y.onrender.com/auth/login";
export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ""
    }
  }

  handleinput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handlelogin = () => {
    fetch(Lurl, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }

    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.auth === true){
        sessionStorage.setItem("token",data.token);
        
        this.props.history.push("/");
      }
      else{
        console.log("invalid credential");
      }
    })
  }



  render() {
    return (
      <div>
        <Header />
        <div className='Login-cont'>
          <h2 id='login-capt'>Login</h2>
          <div className='login-fields'>
            <label id='labels'>Email</label>
            <input type='text' id='email' name='email' placeholder='enter your email' autoComplete='off' onChange={this.handleinput} />
            <label id='labels'>Password</label>
            <input type='password' id='pass' name='password' placeholder='enter your password' onChange={this.handleinput} />
            <button className='login-butnn' onClick={this.handlelogin}>Login</button>
          </div>
        </div>
      </div>

    )
  }
}




