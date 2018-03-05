import { SEARCH_RESULT } from '../actions/types';


export default (state = {}, action) => {
	switch (action.type) {
        case SEARCH_RESULT:
            return action.payload
		default:
			return state;
	}
};
