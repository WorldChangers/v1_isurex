import { call, put } from 'redux-saga/effects';
import { START_CALL, END_CALL, AUTH_ERROR } from '../actions/types';
import API from '../API'
import { setAuthorizationHeader } from '../utils';

export function* signInUserSaga(action) {
	try {
		yield put({ type: START_CALL });
		const res = yield call(API.user.login, action.data);
		yield localStorage.setItem('user', JSON.stringify(res.data));
		yield put({ type: END_CALL });
		yield action.history.push('/');
		setAuthorizationHeader(res.data.token);
	} catch (e) {
		yield put({ type: AUTH_ERROR, msg: e });
		yield put({ type: END_CALL });
	}
}

export function* signUpUserSaga(action) {
	try {
		yield put({ type: START_CALL });
		yield call(API.user.signup, action.data);
		yield put({ type: END_CALL, msg:'Account created successfully, now signin'});
		yield action.history.push('/login');
	} catch (e) {
		yield put({ type: AUTH_ERROR, msg: e });
		yield put({ type: END_CALL });
	}
}


