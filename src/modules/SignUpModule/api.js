import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const signUpApi = async (form) => {
  const response = await axios.post('/1.0/api/auth/register', form);
  console.log(response);
  return response.data;
};
//
//
