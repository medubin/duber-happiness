import React from 'react';

const Day = (props) => {
    let selected = props.selected ? "selected" : '';
    return(
        <div onClick={() => props.selectDay(props.date)} className={`day happiness${props.happiness} ${selected}`}/>
    );
}

export default Day;