import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from '../actions/types';

const DEFAULT_STATE = {
	authenticated: null,
	error: null
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: true, error: null };
		case AUTH_ERROR:
			return { ...state, error: action.msg, authenticated: false };
		default:
			return state;
	}
};
