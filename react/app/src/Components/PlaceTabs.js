import React from 'react'
import "./PlaceTabs.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { AppBar } from '@mui/material';



const Panel = (props) => (
    <div hidden={props.value !== props.index}>
        {props.value === props.index && <Typography>{props.children}</Typography>}
    </div>
)


export const PlaceTabs = (props) => {

    const [index, setIndex] = useState(0);
    const tabclick = (event, index) => {
        setIndex(index)
    }

    const ArrayConvert = ({ Tabdata }) => {
        if (typeof Tabdata !== 'object' || Tabdata === null) {
            console.error('Tabdata is not an object');
            return;
        }
        let TabArray = [];
        TabArray.push(Tabdata);
        return TabArray.map((item)=>{
            console.log("gr4r",item);
        })
    };
    
    

    return (
        <div className='slide-tabs' >
            {ArrayConvert(props)}
            <AppBar style={{ position: "static", backgroundColor: "white", border: "none", boxShadow: "none" }}>
                <Tabs value={index} onChange={tabclick} style={{ borderBottom: "2px solid #D2D9E6" }}>
                    <Tab label="Overview" style={{ color: "#192F60", fontWeight: 600 }} />
                    <Tab label="Contacts" style={{ color: "#192F60", fontWeight: 600 }} />
                    <button className='butn-order'>Place Online Order</button>
                </Tabs>
            </AppBar>
            <Panel value={index} index={0} >
                <div>
                    <h4 id='left-head'>About this place</h4>
                    <h6 id='cuisine-head'>Cuisine</h6>
                    <p></p>
                    <h6 id='cost-head'>Average Cost</h6>
                    <p>₹700 for two people (approx.)</p>
                </div>
            </Panel>
            <Panel value={index} index={1}>
                <div>
                    <p id='ph-no'>Phone number</p>
                    <p id='ph-head'>+91 114004566</p>
                    <h5 id='rest-nme'>The big Chilly Ckase</h5>
                    <p id='rest-add'>Address</p>
                </div>
            </Panel>
        </div>

    )
}

export default PlaceTabs