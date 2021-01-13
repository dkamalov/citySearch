import React from 'react'

const Citiesinfo = (props) => (
<div className = "container">
    <div className = "location">
        City: {props.city} <br/>
        Zipcode: {props.zip} <br/>
        wage: {props.wage} <br/>
        Population: {props.pop} <br/>
        Longitude: {props.long} Latitude: {props.lat}
    </div>
</div>
)

export default Citiesinfo