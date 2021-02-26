import { call, put, takeEvery } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginError } from './actions';
import { loginApi } from './api';
import history from '../history';

function* loginFuncSaga(action) {
  try {
    console.log(action.payload);
    const loginData = yield call(loginApi, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    //loginData ={...loginData, userInfo: action.payload};
    loginData.userInfo = action.payload.loginId;
    yield put(loginSuccess(loginData));
    yield call([history, history.push], '/');
  } catch (e) {
    yield put(loginError(e));
  }
}
export function* loginSaga() {
  yield takeEvery('LOGIN_REQUEST', loginFuncSaga);
}
//
