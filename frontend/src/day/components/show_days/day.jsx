import React from 'react';
import '../../scss/day.css'

const Day = (props) => {
    return(
        <div className={`day happiness${props.happiness}`}/>
    );
}

export default Day;