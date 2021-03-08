/* eslint-disable import/prefer-default-export */
// import Api from '../axiosConfig';
import axios from 'axios';

export const writeApi = async (form) => {
  const token = window.localStorage.getItem('token');
  console.log(token);
  const response = await axios.post('/1.0/api/project/insert', {
    category: "test category",
    categoryDetail: "test cate detail",
    r18: "test r18",
    memberCount: 3,
    period: 30,
    title: "test title",
    desc: "this is test description."
  }, {
    headers: { Token: token } // headers: { Authorization: "Bearer " + token }
  });

  console.log(response);
  return response.data;
};
