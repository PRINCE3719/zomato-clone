import React, { useEffect, useState } from 'react'
import Header from '../Hader/Header'
import {Displayorder} from './Displayorder';
import axios from "axios"


const Ourl = "http://localhost:4000/order";


export const Vieworder = () => {
    const [order,setOrder] = useState()

    let session = sessionStorage.getItem("userdata");
    let data = JSON.parse(session);
    

    useEffect(()=>{
      setOrder([]);
       axios.get(`${Ourl}?email=${data.email}`)
      .then((res)=> {
        console.log("valuessssss",res);
        setOrder(res.data);
      })
    },[data.email])
 
    
    return (
        <div>
          <Header/>
          <Displayorder orderData = {order}/>
        </div>
      )
}


