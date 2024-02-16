import React from 'react'
import Header from '../Hader/Header'
import "./success.css"
import check from "./img/Eo_circle_green_checkmark.svg.png"
import { Link } from "react-router-dom"

const Success = () => {
  return (

    <div>
      <Header />
      <div className='success-div'>
        <img src={check} alt='check' id='check-img' />
        <h3 id='payment-head'>Payment Done!</h3>
        <p id='payment-p'>Thank you for completing your secure online payment.
          Have a great day!</p>
          <Link to = "/"><button className='home-butn'>GO HOME</button></Link>
      </div>
    </div>
  )
}

export default Success