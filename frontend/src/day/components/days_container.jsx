import React from 'react';
import ShowDays from './show_days/show_days';
import CreateDay from './create_day/create_day';

const DaysContainer = (props) => {
    return(
        <div>
            <ShowDays />
            <CreateDay />
        </div>
    );
}

export default DaysContainer;