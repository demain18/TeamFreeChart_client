import axios from 'axios';

const Api = axios.create();
// client.defaults.baseURL = 'https://여기에 api 주소를 입력하세요./';
Api.defaults.baseURL = 'http://ec2-18-216-198-225.us-east-2.compute.amazonaws.com';
const Token = window.localStorage.getItem('token');
console.log(Token);
Api.defaults.headers.common.Authorization = Token || 'none';
export default Api;

// 아래와 같이 로그인/회원가입 onSubmit함수에 대입하세요.
// const onSubmit = (form: { email: string; password: string }) => {
//     dispatch(loginRequest(form));
//   };
//
