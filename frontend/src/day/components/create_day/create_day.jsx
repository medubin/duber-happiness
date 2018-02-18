import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {createDay} from '../../actions/day_actions'
import SelectedDay from './selected_day';
import HappinessPicker from './happiness_picker';


const mapStateToProps = ({day}) => ({
    selectedDay: day.selectedDay,
    happiness: day.days[day.selectedDay] || 0
});

const mapDispatchToProps = (dispatch) => ({
    createDay: dayData => dispatch(createDay(dayData))
});
  

class CreateDay extends React.Component {
    constructor(props) {
        super(props);
        this.selectHappiness = this.selectHappiness.bind(this);
    }

    selectHappiness(e, happiness) {
        let dayData = {date: this.props.selectedDay, happiness: happiness};
        this.props.createDay(dayData) 
    } 

    render() {
        return (
        <div>
            <SelectedDay selectedDay={this.props.selectedDay} />
            <HappinessPicker selectHappiness={this.selectHappiness} happiness={this.props.happiness}/>
        </div>
            );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(CreateDay));