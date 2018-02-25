import axios from 'axios';
import URL from '../urls'
import { setAuthorizationHeader } from '../utils'

if (localStorage.getItem('user')) {
	const { token } = JSON.parse(localStorage.getItem('user'));
	setAuthorizationHeader(token);
}

export default {
	user: {
		login: ({ email, password }) => axios.post(URL.LOGIN, { email, password }),
		signup: (data) => axios.post(URL.SIGNUP, data),
		
	},
	client: {
		addClient: (data) => axios.post(URL.CREATE_CLIENT, data),
		getAllClaims: () => axios.get(URL.getAllClaims)
	},
	vehicle: {
		addVehicle: (data) => axios.post(URL.CREATE_VEHICLE, data)
	},
	claim: {
		addClaim: (data) =>  axios.post(URL.CREATE_CLAIM, data)
	}
};
