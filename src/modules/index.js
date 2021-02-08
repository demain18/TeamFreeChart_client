import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import signUp, { signUpSaga } from './SignUpModule';
import login, { loginSaga } from './SignInModule';
import counter, { counterSaga } from './counter';

const rootReducer = combineReducers({
  signUp,
  login,
  counter
});

export default rootReducer;

export function* rootSaga() {
  yield all([loginSaga(), signUpSaga(), counterSaga()]); // all은 배열안의 여러 사가를 동시에 실행시켜줌
}
