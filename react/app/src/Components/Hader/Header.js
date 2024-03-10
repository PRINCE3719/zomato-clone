import React, { Component } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"


const UUrl = "https://login-app-fm0y.onrender.com/auth/userInfo";
export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      userData: "",
      username:"",
    }
  }

  handleLogout=()=>{
    sessionStorage.setItem("loginout","u r logged out")
    sessionStorage.removeItem("token")
    sessionStorage.clear("userdata");
    this.setState({userData:[]});
    
  }


  conditionalrender = () => {
    if(this.state.userData.email){
      let sdata = this.state.userData;
      sessionStorage.setItem("login","logged-inn")
      sessionStorage.setItem("userdata",JSON.stringify(sdata));
      
    
     
      return (
        <div className='after-login'>
          <div className='profile'>
            <div className='profile-name'>Hi,{this.state.username}</div>
            <Link to="/Login" className={"link-styles"}><button className='login-out' onClick={this.handleLogout}>Log out</button></Link>
          </div>
        </div>
  
      )
    }
    else{
      return(
          <div className="header-login">
          <Link to="/Login" className={"link-styles"}><span><a>Login</a></span></Link>
          <Link to="/Register" className ={"link-styles"}><button><a>Create an account</a></button></Link>
        </div>
      )
    }

   
  }


  render() {
    return (
      <div>
        <header>
          <div className="header-div">
            <Link to="/"><div className="header-logo">
              <span>e!</span>
            </div></Link>
            {this.conditionalrender()}
          </div>
        </header>
      </div>
    )
  }


  componentDidMount() {
    fetch(UUrl, {
      method: "GET",
      headers: {
        "x-acess-token": sessionStorage.getItem("token")
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.email){
        this.setState({username:data.name})
       
      }
   
      console.log("info",data);
      this.setState({userData:data})
    })
  }
}

