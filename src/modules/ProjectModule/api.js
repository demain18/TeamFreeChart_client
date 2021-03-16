/* eslint-disable import/prefer-default-export */
// import Api from '../axiosConfig';
import axios from 'axios';

export const writeApi = async (form) => {
  const token = window.sessionStorage.getItem('token');
  const response = await axios.post('/1.0/api/project/insert', {
    category: form.category,
    categoryDetail: form.categoryDetail,
    r18: form.r18,
    memberCount: form.memberCount,
    period: form.period,
    title: form.title,
    desc: form.desc
  }, {
    headers: { token: token } // headers: { Authorization: "Bearer " + token }
  });

  return response.data;
};

export const listApi = async (form) => {
  const response = await axios.get(`/1.0/api/gallery/read?page=${form.page}&category=${form.category}&categoryDetail=${form.categoryDetail}`);
  return response.data;
}