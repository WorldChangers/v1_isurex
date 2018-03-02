import axios from 'axios'

export const setAuthorizationHeader = token => {
	axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
};