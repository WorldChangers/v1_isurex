import { START_CALL, END_CALL, ERROR_CALL } from '../actions/types';

const DEFAULT_STATE = {
	isLoading: false
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case START_CALL:
			return { ...state, isLoading: true };
		case END_CALL:
			return { ...state, isLoading: false, signup: action.msg };
		case ERROR_CALL:
			return { ...state, isLoading: false, error: true}
		default:
			return state;
	}
};
