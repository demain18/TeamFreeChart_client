import { call, put, takeEvery } from 'redux-saga/effects';
import { signUpSuccess, signUpError, signUpRequest } from './actions';
import { signUpApi } from './api';
import history from '../history';

function* signUpFuncSaga(action) {
  console.log(action);
  try {
    const signUpData = yield call(signUpApi, action.payload);
    yield put(signUpSuccess(signUpData));
    yield call([history, history.push], '/signin');
  } catch (e) {
    yield put(signUpError(e));
  }
}
export function* signUpSaga() {
  yield takeEvery('SIGNUP_REQUEST', signUpFuncSaga);
}
