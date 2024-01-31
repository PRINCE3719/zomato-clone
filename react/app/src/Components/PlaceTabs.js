import React from 'react'
import "./PlaceTabs.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { AppBar } from '@mui/material';
import Menu from './Menu/Menu';





const Panel = (props) => (
    <div hidden={props.value !== props.index}>
        {props.value === props.index && <Typography>{props.children}</Typography>}
    </div>
)


export const PlaceTabs = (props) => {
    let val = props.Tabdata;
    let menu = props.MenuList;
    console.log("test", val.cuisines);

    

    const [index, setIndex] = useState(0);
    const tabclick = (event, index) => {
        setIndex(index)
    }

   

    


    return (
        <div className='slide-tabs' >

            <AppBar style={{ position: "static", backgroundColor: "white", border: "none", boxShadow: "none" }}>
                <Tabs value={index} onChange={tabclick} style={{ borderBottom: "2px solid #D2D9E6" }}>
                    <Tab label="Overview" style={{ color: "#192F60", fontWeight: 600 }} />
                    <Tab label="Contacts" style={{ color: "#192F60", fontWeight: 600 }} />
                    <Menu MenuData = {menu} Value = {val.restaurant_name}/>
                </Tabs>
            </AppBar>
            <Panel value={index} index={0} >
                <div>
                    <h4 id='left-head'>About this place</h4>
                    <h6 id='cuisine-head'>Cuisine</h6>
                    {val?.cuisines && val.cuisines.length > 0 && (
                        <div>
                            {val.cuisines.map((cuisine) => (
                                <span key={cuisine.cuisine_id}>{cuisine.cuisine_name}&nbsp;&nbsp;</span>
                            ))}
                        </div>
                    )}




                    <h6 id='cost-head'>Average Cost</h6>
                    <p>₹{val.cost} for two people (approx.)</p>
                </div>
            </Panel>
            <Panel value={index} index={1}>
                <div>
                    <p id='ph-no'>Phone number</p>
                    <p id='ph-head'>+91 {val.contact_number}</p>
                    <h5 id='rest-nme'>{val.restaurant_name}</h5>
                    <p id='rest-add'>{val.address}</p>
                </div>
            </Panel>
        </div>

    )
}

export default PlaceTabs