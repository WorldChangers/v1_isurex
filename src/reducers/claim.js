import { SEARCH_TEXT, CLIENT_FETCHED } from '../actions/types';

const DEFAULT_STATE = {
    clients: [],
    search: [],
    word: ''
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
        case SEARCH_TEXT:
          const {word} = action;
          const search = state.clients.filter((val) => val.fullname.toLowerCase().includes(word));
          return {...state, word, search};
        case CLIENT_FETCHED:
            return {...state, clients: state.clients.concat(action.data)}
		default:
			return state;
	}
};
