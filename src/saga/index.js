import { takeLatest } from 'redux-saga/effects';
import { AUTH_USER, CREATE_CLAIM, FETCH_CLIENTS, SIGNUP_USER } from '../actions/types';
import { signInUserSaga, signUpUserSaga } from './auth';
import { addClaimSaga, fetchClientsSaga } from './claim'

export default function* rootSaga() {
	yield takeLatest(SIGNUP_USER, signUpUserSaga);
	yield takeLatest(AUTH_USER, signInUserSaga);
	yield takeLatest(CREATE_CLAIM, addClaimSaga);
	yield takeLatest(FETCH_CLIENTS, fetchClientsSaga);
}
