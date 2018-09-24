import { put, takeLatest, all, call } from 'redux-saga/effects';
import {get} from '../../api'

function* fetchNews() {
    const userData = yield call(get, 'https://swapi.co/api/people/1/');
    yield put({ type: "CALLED_SWAPI", data: userData});
}
  
function* actionWatcher() {
    yield takeLatest('CALL_SWAPI', fetchNews)
}

export default function* rootSaga() {
     yield all([
     actionWatcher(),
     ]);
}