import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getDays} from '../../actions/day_actions'
import Day from './day';
import {stringifyDate} from '../../util/days_util'

const mapStateToProps = ({day}) => ({
    days: day.days
});

const mapDispatchToProps = (dispatch) => ({
    getDays: () => dispatch(getDays())
});
  

class ShowDays extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getDays();
    }

    renderDays() {
        let days = [];
        let startDate = new Date();
        startDate.setFullYear( startDate.getFullYear() - 1 );
        for(let i = 0; i <= 365; i++) {
            let happiness = 0;
            let currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
            if (this.props.days[stringifyDate(currentDate)] !== undefined ){
                happiness = this.props.days[stringifyDate(currentDate)];
            }

            days.push(<Day key={i} date={currentDate} happiness={happiness} />);
        }
        return days;
    }

    render() {
        return <div className='day-container'>{this.renderDays()}</div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(ShowDays));