import React from 'react';
import {
    OPEN_MODAL,
    CLOSE_MODAL } from '../actions/modal_actions';
  import merge from 'lodash/merge';
  
  const _defaultState = Object.freeze({
    modalContent: <div></div>,
    displayModal: false
  });
  
  const ModalReducer = (state = _defaultState, action) => {
    let newState = merge({}, state);
    Object.freeze(state);
    switch(action.type) {
      case CLOSE_MODAL:
        newState.displayModal = false;
        return newState;
      case OPEN_MODAL:
        newState.modalContent = action.modalContent;
        newState.displayModal = true;
        return newState
      default:
        return state;
    }
  }
  
  export default ModalReducer;
  