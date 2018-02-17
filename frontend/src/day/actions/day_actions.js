import * as API from '../api/day_api'

export const RECEIVE_DAYS = 'RECEIVE_DAYS';
export const RECEIVE_DAY = 'RECEIVE_DAY';
export const SELECT_DAY = 'SELECT_DAY';

export const getDays = () => dispatch => (
    API.getDays().then(days => dispatch(receiveDays(days)))
)

export const createDay = (dayData) => dispatch => (
    API.createDay(dayData).then(day => dispatch(receiveDay(day)))
)

export const selectDay = (day) => dispatch => (
    dispatch(receiveSelectedDay(day))
)

export const receiveDays = days => ({
    type: RECEIVE_DAYS,
    days
})

export const receiveDay = data => ({
    type: RECEIVE_DAY,
    data
})

export const receiveSelectedDay = data => ({
    type: SELECT_DAY,
    data
})