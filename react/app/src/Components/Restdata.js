import React from 'react'
import "./Restdata.css"
import {Link} from "react-router-dom"

export const Restdata = (props) => {

  const renderdata = ({ Rdata }) => {
    console.log(Rdata);
    if (Rdata.length > 0) {
      return Rdata.map((item) => {
        console.log(item);
        return (
          <div className="item3">
            <div className="item-details">
              <div className="food-image">
                <img src={item.restaurant_thumb} className='image-render' />
              </div>
              <div className="rest-name">
                <Link to = {`/details?restId=${item.restaurant_id}`} className={"link-line"}><h3 id="head-main">{item.restaurant_name}</h3></Link>
                <p id="head-two-main">FORT</p>
                <p id="sub-p">{item.address}</p>
              </div>
            </div>
            <hr />
            <div className="money">
              <div className="section-one">
                <p id='p-bottom'>CUISINES:</p>
                <p>COST FOR TWO:</p>
              </div>
              <div className="section-two">
                {item.cuisines.map((cus) => (
                  <span>{cus.cuisine_name}&nbsp;&nbsp;</span>
                ))}
                <p id='cost-p'>₹{item.cost}</p>
              </div>
            </div>
          </div>
        )
      })
    }

  }

  return (
    <div>{renderdata(props)}</div>
  )

}




