import React, { useEffect, useState } from 'react'
import "./Displayorder.css"
import axios from "axios"
import { useHistory } from 'react-router-dom';




const PUrl = "https://payment-api-42f5.onrender.com/api/getkey";
const Paymenturl = "https://payment-api-42f5.onrender.com/checkout";
const VerifyUrl = "https://payment-api-42f5.onrender.com/payment-verify";



export const Displayorder = (props) => {

  const history = useHistory();

  const [orderid, setorderid] = useState();

  const Checkout = async () => {
    let cost = sessionStorage.getItem("cost");

    const { data: { key } } = await axios.get(PUrl)
    const { data: { order } } = await axios.post(Paymenturl, { cost: cost })

    const options = {
      key,
      amount: order.cost,
      currency: "INR",
      name: "Payment",
      description: "Razorpay",
      order_id: order.id,
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
      handler:async function(response){
        if(response.razorpay_payment_id){
          await axios.delete(`https://restaurantapi-1.onrender.com/deleteOrder/${orderid}`)
          history.push(`/success?reference=${response.razorpay_payment_id}`);
          
        }
        else{
          console.log("not got it");
        }
      }

    };
    const razor = new window.Razorpay(options);
    razor.open();


  }

  const renderTable = ({ orderData }) => {
    if (orderData && orderData.length>0) {
      return orderData.map((item) => {
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
    else{
      return(
        <tr>
          <td>
            No data
          </td>
        </tr>
      )
    }

  }




  useEffect(() => {
    if (props.orderData) {
      props.orderData.forEach((data) => {
        setorderid(data.id);
     


      });
    }

    
  }, [props.orderData,orderid])


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
          {props.orderData && props.orderData.length > 0 && (
            <button className='checkout-butn' onClick={Checkout}>Checkout</button>
          )}
          
        </table>
      </div>
    </div>
  )
}
