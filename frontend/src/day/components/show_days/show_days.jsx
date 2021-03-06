import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getDays, selectDay} from '../../actions/day_actions'
import Day from './day';
import {stringifyDate} from '../../util/days_util'
import Week from './week';

const mapStateToProps = ({day}) => ({
    days: day.days,
    selectedDay: day.selectedDay
});

const mapDispatchToProps = (dispatch) => ({
    getDays: () => dispatch(getDays()),
    selectDay: (day) => dispatch(selectDay(day))
});
  

class ShowDays extends React.Component {
    constructor(props) {
        super(props);
        this.selectDayCallBack = this.selectDayCallBack.bind(this);
    }

    componentWillMount() {
        this.props.getDays();
    }

    selectDayCallBack(date) {
        this.props.selectDay(stringifyDate(date));
    }

    renderDays() {
        let days = [];
        let finalDays = [];
        let startDate = new Date();
        startDate.setFullYear( startDate.getFullYear() - 1 );
        for(let i = 365; i >= 0; i--) {
            let happiness = 0;
            let currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
            let selected = stringifyDate(currentDate) === this.props.selectedDay;
            if (this.props.days[stringifyDate(currentDate)] !== undefined ){
                happiness = this.props.days[stringifyDate(currentDate)];
            }
            if (i === 365) {
                for(let j = 0; j < 6 -currentDate.getDay(); j++) {
                    days.push(<div key={'bd' + j} className='blank-day'></div>)
                }
            }
            days.push(<Day selectDay={this.selectDayCallBack} key={i} date={currentDate} happiness={happiness} selected={selected} />);
            if (days.length === 7) {
                finalDays = finalDays.concat(days.reverse());
                days = []
            }
        }
        return finalDays;
    }

    render() {
        return (
            <div> 
                <Week />
                <div className='days-container'>{this.renderDays()}</div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(ShowDays));