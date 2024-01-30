import React, { Component } from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="header-div">
            <Link to ="/"><div className="header-logo">
              <span>e!</span>
            </div></Link>
            <div className="header-login">
              <span><a>Login</a></span>
              <button><a>Create an account</a></button>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
