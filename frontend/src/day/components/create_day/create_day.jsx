import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {createDay} from '../../actions/day_actions'

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    createDay: dayData => dispatch(createDay(dayData))
});
  

class CreateDay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>Hello World</div>
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(CreateDay));