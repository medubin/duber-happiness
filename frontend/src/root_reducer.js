import {combineReducers} from 'redux';

import UserReducer from './user/reducers/user_reducer';
import ModalReducer from './modal/reducers/modal_reducer';
import DayReducer from './day/reducers/day_reducer';

const RootReducer = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
  day: DayReducer

});

export default RootReducer;
