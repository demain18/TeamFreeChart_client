import { call, put, takeEvery } from 'redux-saga/effects';
import { writeRequest, getProjectRequest, getGalleryRequest, updateProjectRequest, deleteProjectRequest, projectSuccess, projectError} from './actions';
import { writeApi } from './api';
import history from '../history';

function* writeFuncSaga(action) {
  try {
    console.log(action.payload);
    const returnData = yield call(writeApi, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    //loginData ={...loginData, userInfo: action.payload};
    console.log(returnData);
    //loginData.userInfo = action.payload.loginId;
    yield put(projectSuccess(returnData));
    yield call([history, history.push], '/');
  } catch (e) {
    yield put(projectError(e));
  }
}


export function* projectSaga() {
  yield takeEvery('WRITE_REQUEST', writeFuncSaga );
}
//
