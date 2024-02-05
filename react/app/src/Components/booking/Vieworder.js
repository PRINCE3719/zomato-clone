import React, { useState } from 'react'
import Header from '../Hader/Header'
import Displayorder from './Displayorder';
import axios from "axios"


const Ourl = "http://localhost:4000/order?email=";


export const Vieworder = () => {
    const [order,setOrder] = useState()

    let session = sessionStorage.getItem("userdata");
    let data = JSON.parse(session);
    console.log(data);
    let names = sessionStorage.getItem("NAME");
    let num = localStorage.getItem("Number");

    let results= axios.get(Ourl)
    console.log("details order",results);
    
    return (
        <div>
          <Header/>
          <Displayorder/>
        </div>
      )
}


