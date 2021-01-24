import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import signUp, { signUpSaga } from './SignUpModule';
import login, { loginSaga } from './SignInModule';

const rootReducer = combineReducers({
  signUp,
  login,
});

export default rootReducer;

export function* rootSaga() {
  yield all([loginSaga(), signUpSaga()]);
}
