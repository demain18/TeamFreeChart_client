// import { loginApiProps } from './api';

export const WRITE_REQUEST = 'project/WRITE_REQUEST';
export const PROJECT_SUCCESS = 'project/PROJECT_SUCCESS';
export const PROJECT_ERROR = 'project/PROJECT_ERROR';

export const GET_GALLERY_REQUEST = 'project/GET_GALLERIES_REQUEST';
export const GET_PROJECT_REQUEST = 'project/GET_PROJECT_REQUEST';
export const UPDATE_PROJECT_REQUEST = 'project/UPDATE_PROJECT_REQUEST';
export const DELETE_PROJECT_REQUEST = 'project/DELETE_PROJECT_REQUEST';

export const writeRequest = (form) => ({
  type: 'WRITE_REQUEST',
  payload: form
});

export const getGalleryRequest = (form) => ({
  type: 'GET_GALLERY_REQUEST',
  payload: form
});

export const getProjectRequest = (form) => ({
  type: 'GET_PROJECT_REQUEST',
  payload: form
});

export const updateProjectRequest = (form) => ({
  type: 'UPDATE_PROJECT_REQUEST',
  payload: form
});
export const deleteProjectRequest = (form) => ({
  type: 'DELETE_PROJECT_REQUEST',
  payload: form
});

export const projectSuccess = (result) => { // (loginData: loginApiProps)
  console.log(result);
  alert('성공하였습니다.');
  return {
    type: 'PROJECT_SUCCESS',
  };
};

export const projectError = (error) => {
  console.log(error);
  alert('에러가 발생하였습니다. 다시 시도해 주세요.');
  return {
    type: 'PROJECT_ERROR',
    error,
  };
};
//
