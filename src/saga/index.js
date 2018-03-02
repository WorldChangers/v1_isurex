import { takeEvery } from 'redux-saga/effects';
import { AUTH_USER, CREATE_CLAIM, FETCH_CLIENTS, SIGNUP_USER, SEARCH_TEXT } from '../actions/types';
import { signInUserSaga, signUpUserSaga } from './auth';
import { addClaimSaga, fetchClientsSaga, searchSaga } from './claim'

export default function* rootSaga() {
	yield takeEvery(SEARCH_TEXT, searchSaga)
	yield takeEvery(SIGNUP_USER, signUpUserSaga);
	yield takeEvery(AUTH_USER, signInUserSaga);
	yield takeEvery(CREATE_CLAIM, addClaimSaga);
	yield takeEvery(FETCH_CLIENTS, fetchClientsSaga);
}
