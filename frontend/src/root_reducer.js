import {combineReducers} from 'redux';

import UserReducer from './user/reducers/user_reducer';
import ModalReducer from './modal/reducers/modal_reducer';

const RootReducer = combineReducers({
  user: UserReducer,
  modal: ModalReducer,

});

export default RootReducer;
