import React from 'react';

const HappinessPicker = (props) => {
    const renderHappinessPicker = () => {
        return [1,2,3,4,5].map((x) => {
            let selected = props.happiness === x ? 'selected' : '';
            return <div onClick={(e) => props.selectHappiness(e, x)} key={x} className={`happiness-picker happiness${x} ${selected}`} />
        }
        );
    }
    return (
        <div className='flex-container'>
            {renderHappinessPicker()}
        </div>
    )
}

export default HappinessPicker;