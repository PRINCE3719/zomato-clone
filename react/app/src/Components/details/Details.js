import React, { Component } from 'react'
import Header from '../Hader/Header'
import './Details.css'

export default class Details extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='main-center'>
            <img src="https://picsum.photos/800/600?random=1" className='image-rest'/>
        </div>
        <div className='second-part'>
            <h2>restaurant name</h2>
            <div className='tabs-div'>
                
            </div>
        </div>
      </div>
    )
  }
}
