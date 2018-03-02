import { CLIENT_FETCHED } from '../actions/types';

const DEFAULT_STATE = {
    clients: [],
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
        case CLIENT_FETCHED:
            return {...state, clients: state.clients.concat(action.data)}
		default:
			return state;
	}
};
