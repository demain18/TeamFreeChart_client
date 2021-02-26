/* eslint-disable import/prefer-default-export */
// import Api from '../axiosConfig';
import axios from 'axios';

export const loginApi = async (form) => {
  const response = await axios.post('/1.0/api/auth/login', {
    id: form.loginId,
    pw: form.pswd
  });

  console.log(response);
  return response.data;
};
