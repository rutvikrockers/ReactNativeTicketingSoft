import {doFetch} from './fetch';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ERROR = 'ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

function login(user) {
  return {
    type: LOGIN,
    payload: user
  }
}

function logout() {
  return {
    type: LOGOUT
  }
}



function error(e) {
  return {
    type: ERROR,
    payload: e
  }
}

export function hideError() {
  return {
    type: HIDE_ERROR,
  }
}



export function authenticate(email, password, token) {
  return function (dispatch) {
    return doFetch('POST', `/post_login`, {
        user_email: email,
        user_password: password
    }, token, function(err, res){
      if(err || res.success === false){ 
        var e = res.message || err;
        return dispatch(error(e))
      };
      return dispatch(login(res.data));
    })
  }
}

export function destroySession() {
  return function (dispatch) {
    return dispatch(logout());
  }
}
