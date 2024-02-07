import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./SearchDisplay.css"

 export const SearchDisplay = (props)=>{

    const ListMeal = ({mealData})=>{
        if(mealData){
            return mealData.map((item)=>{
                console.log(item);
                return(
                    <Link key={item._id} to = {`/listing/${item.mealtype_id}`} className={"link-styles"}>
                    <div className="food1">
                    <div className="food1-half">
                        <img src={item.meal_image} id="breakfast" alt={item.mealtype} />
                    </div>
                    <div className="food1-second">
                        <h4>{item.mealtype}</h4>
                        <p>{item.content}</p>
                    </div>
                </div>
                </Link>
                
                )
            })

        }
    }

    return(
        <>
         <div className="food-type" style={{textDecoration:"none"}}>
            {ListMeal(props)}
            </div>
        </>
    )
    

}