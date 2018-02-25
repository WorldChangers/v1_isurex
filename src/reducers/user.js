import { CREATE_USER_ERROR } from '../actions/types';

const DEFAULT_STATE = {
	error: false
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case CREATE_USER_ERROR:
			return { ...state, error: true };
		default:
			return state;
	}
};
