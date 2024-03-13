import React, { Component } from 'react'
import "./Registration.css"
import Header from '../Hader/Header'

const Rurl = "https://login-app-fm0y.onrender.com/auth/register";
export default class Registration extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
    }
  }

  Handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
  

    })

  }

  Handlesubmit = () => {
    fetch(Rurl, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((response)=>{
      if(response.ok){
      this.props.history.push("/Login")
    localStorage.setItem("Number",this.state.phone);
    localStorage.setItem("userName",this.state.name);
      }
      else{
        throw new Error('Registration failed');
      }
    })
    .catch((error)=>{
      console.log(error);
    })
    
  

  }

  render() {
    return (
      <div>
        <Header/>
        <div className='register-main'>
          <h2 className='regi-head'>Register</h2>
          <div className='register-fields'>
            <label>Firstname</label>
            <input type='text' id='firstname' placeholder='enter your firstname' name='name' onChange={this.Handlechange} />
            <label>Email</label>
            <input type='email' id='emaiol' placeholder='enter your email' name='email' onChange={this.Handlechange} />
            <label>Phone</label>
            <input type='text' id='number' autoComplete='off' name='phone' placeholder='enter yourt phone no' onChange={this.Handlechange} />
            <label>Password</label>
            <input type='password' id='passwrd' name='password' placeholder='enter your password' onChange={this.Handlechange} />
            <button className='regi-butnn' onClick={this.Handlesubmit}>Register</button>
          </div>
        </div>
      </div>
    )
  }
}
