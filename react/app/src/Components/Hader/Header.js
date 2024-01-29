import React, { Component } from 'react'
import "./Header.css"

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
        <div className="header-div">
            <div className="header-logo">
                <span>e!</span>
            </div>
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
