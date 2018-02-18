import * as API from '../api/user_api'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT = "LOGOUT"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signup = user => dispatch => (
  API.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);


export const login = user => dispatch => (
  API.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
    
);

export const getCurrentUser = () => dispatch => (
  API.getCurrentUser().then (user => dispatch(receiveCurrentUser(user)))
)

export const logout = () => dispatch => (
  API.logout().then(user => dispatch(receiveCurrentUser(null)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
