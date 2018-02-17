import {RECEIVE_DAY, RECEIVE_DAYS} from '../actions/days_actions';
import merge from 'lodash/merge';

const _nullDays = Object.freeze({
    days: []
});

const DayReducer = (state = _nullDays, action) => {
    let newState = merge({}, state);
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_DAYS:
            newState.templates = action.templates;
            return newState;
        case RECEIVE_DAY:
            newState.days = merge(newState.days, action.data);
            return newState;
        default:
            return state;
    }
}

export default DayReducer;