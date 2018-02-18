import React from 'react';
import ShowDays from './show_days/show_days';
import CreateDay from './create_day/create_day';
import '../scss/day.css'

const DaysContainer = (props) => {
    return(
        <div className='flex-container'>
            <ShowDays />
            <CreateDay />
        </div>
    );
}

export default DaysContainer;