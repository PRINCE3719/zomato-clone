import React from 'react'
import "./Displayorder.css"

import Header from '../Hader/Header';


const PUrl = "http://localhost:7000/api/getkey";
const Paymenturl = "http://localhost:7000/checkout";
const VerifyUrl = "http://localhost:7000/payment-verify";

export const Displayorder = (props) => {



  const Checkout = () => {
    const { data: { key } } = fetch(PUrl, {
      method: "GET",
    })
    const { data: { order } } = fetch(Paymenturl, { method: "POST" },
      console.log(order))
    const options = {
      key,
      currency: "INR",
      name: "simplyjs",
      description: "Razorpay",
      callback_url: VerifyUrl,
      prefill: {
        name: "Prince prakash",
        email: "prince@gmail.com",
        contact: "8976543212",
      },
      notes: {
        "address": "plotb,delhi"
      },
      theme: {
        "color": "#3399cc"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();

  }

  const renderTable = ({ orderData }) => {
    if (orderData) {
      return orderData.map((item) => {
        console.log("renderss", item);
        return (
          <tr key={item.id} id='table-tr-data'>
            <td>{item.id}</td>
            <td>{item.rest_Name}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>&#x20B9;{item.cost}</td>
          </tr>


        )
      })
    }
  }
  return (
    <div>
      <div className='table-cont'>
        <h2 id='details-order'>Order Details</h2>
        <table className='tables-div'>
          <thead>
            <tr>
              <th>OrderId</th>
              <th>Restaurant Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Cost</th>

            </tr>
          </thead>
          <tbody>
            {renderTable(props)}
          </tbody>
          <button className='checkout-butn' onClick={Checkout}>Checkout</button>
        </table>
      </div>
    </div>
  )
}
