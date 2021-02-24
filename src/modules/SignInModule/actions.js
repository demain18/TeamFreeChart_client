// import { loginApiProps } from './api';

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'login/LOGIN_ERROR';

export const loginRequest = (form) => ({
  type: 'LOGIN_REQUEST',
  payload: form,
});

export const loginSuccess = (loginData) => { // (loginData: loginApiProps)
  console.log(loginData);
  window.sessionStorage.setItem('token', loginData.data.token);
  return {
    type: 'LOGIN_SUCCESS',
    payload: loginData.userInfo,
  };
};

export const loginError = (error) => {
  console.log(error);
  alert('아이디 혹은 비밀번호를 확인해주세요.');
  return {
    type: 'LOGIN_ERROR',
    error,
  };
};
//
