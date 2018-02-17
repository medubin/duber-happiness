import {RECEIVE_DAY, RECEIVE_DAYS, SELECT_DAY} from '../actions/day_actions';
import merge from 'lodash/merge';
import {hashDays} from '../util/days_util';

const _nullDays = Object.freeze({
    days: {},
    selectedDay: null
});

const DayReducer = (state = _nullDays, action) => {
    let newState = merge({}, state);
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_DAYS:
            newState.days = hashDays(action.days);
            return newState;
        case RECEIVE_DAY:
            newState.days = merge(newState.days, action.data);
            return newState;
        case SELECT_DAY:
            newState.selectedDay = action.data;
            return newState;
        default:
            return state;
    }
}

export default DayReducer;