import { signup, logout, login } from "../utils/session";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors 
})


const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch =>
  signup(formUser).then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch =>
  login(formUser).then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch =>
  logout().then(() => dispatch(logoutCurrentUser()));
