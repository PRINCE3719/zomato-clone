import React, { useEffect, useState } from 'react'
import "./Displayorder.css"
import axios from "axios"




const PUrl = "http://localhost:7000/api/getkey";
const Paymenturl = "http://localhost:7000/checkout";
const VerifyUrl = "http://localhost:7000/payment-verify";



export const Displayorder = (props) => {

  // const [orderid,setorderid] = useState();

  const Checkout = async () => {
    let cost = sessionStorage.getItem("cost");
  
    const { data: { key } } = await axios.get(PUrl)
    const { data: { order } } = await axios.post(Paymenturl,{cost : cost})
    console.log("Payment order",order);
    const options = {
      key,
      amount:order.cost,
      currency: "INR",
      name: "Payment",
      description: "Razorpay",
      order_id:order.id,
      callback_url: VerifyUrl,
      prefill: {
        name: order.name,
        email: order.email,
        contact: order.phone,
      },
      notes: {
        "address": order.address
      },
      theme: {
        "color": "#CE0505"
      },
      // handler:function(resp){
      //   // axios.delete(`http://localhost:4000/deleteOrder:/${orderid}`)
      //   // .then(()=>{
      //   //   console.log("deleted successfully");
      //   // })
      // }
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


  // useEffect(()=>{
  //   if(props.orderData){
  //     return props.orderData.map((data)=>{
  //       setorderid(data.id);
  //     })
  //   }
  //   },[props.orderData])

  
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
