import React, { useState }  from 'react'
import Header from '../Hader/Header'
import "./Placeorder.css"
import "animate.css"

const Purl = "https://restaurantapi-1.onrender.com/placeorder";
export const Placeorder = (props) => {
    console.log("props",props);
    let session = sessionStorage.getItem("userdata");
    let data = JSON.parse(session);
    console.log(data);
   
    
    
   

    const initialvalue = {
        id:Math.floor(Math.random() * 10000),
        rest_Name:props.match.params.restName,
        name: data.name,
        email:data.email,
        phone:data.phone,
        address:"plot 33 Banglore",
        cost:sessionStorage.getItem("cost")
        

    }

 
   

    const [values, setValues] = useState(initialvalue)

   
    const handlechange = (e)=>{
        const { name, value} = e.target

        setValues({
            ...values,
            [name]:value
        })
    }

    const checkOut=()=>{
        fetch(Purl,{method:"POST",
        body:JSON.stringify(values),
        headers:{
            accept:"application/json",
            "Content-Type":"application/json"
        }
    })
    .then((props.history.push("/vieworder")))
    }




return(
    <div>
          <Header />
        <div className='mid-container'>
            <h5 id='head-rest'>{props.match.params.restName}</h5>
            <div className='all-fields'>
                <label>Name</label>
                <input type='text' id='name-field' placeholder='Enter your name' name='name' value={values.name} onChange={handlechange}/>
                <label>Mobile Number</label>
                <input type='text' id='Number-field' placeholder='Enter your number' name='phone' value={values.phone} onChange={handlechange}/>
                <label>Address</label>
                <textarea id='adress-field' placeholder='Enter your Address' rows={5} name="address" value={values.address} onChange={handlechange}/>
            </div>
            <div className='butn-footer'>
                <h5>Total Price:Rs:{values.cost}</h5>
                <button onClick={checkOut}>PROCEED</button>
            </div>

        </div>
       
    </div>
)
}
