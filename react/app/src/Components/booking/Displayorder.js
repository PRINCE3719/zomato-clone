import React from 'react'
import "./Displayorder.css"

export const Displayorder = (props) =>{
 console.log(props);

 const renderTable=({orderData})=>{
  if(orderData){
    return orderData.map((item)=>{
      console.log("renderss",item);
      return(
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
        </table>
      </div>
    </div>
  )
}
