import React, { useEffect, useState } from 'react'
import Header from '../Hader/Header'
import {Displayorder} from './Displayorder';
import axios from "axios"


const Ourl = "https://restaurantapi-1.onrender.com/order";


export const Vieworder = () => {
    const [order,setOrder] = useState()

    let session = sessionStorage.getItem("userdata");
    let data = JSON.parse(session);
    

    useEffect(()=>{
       axios.get(`${Ourl}?email=${data.email}`)
      .then((res)=> {
   
        const ordersArray = Array.isArray(res.data) ? res.data : [res.data];
        setOrder(ordersArray);
        
      })

    },[data.email])

   
 
    
    return (
        <div>
          <Header/>
          <Displayorder orderData = {order} />
        </div>
      )
}


