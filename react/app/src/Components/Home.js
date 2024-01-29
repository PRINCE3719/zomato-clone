import React, { Component } from 'react'

import Search from '../Search'
import Quick from './Quick'




export default class Home extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Quick/>
      </div>
    )
  }
}
