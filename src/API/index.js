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
		uploadClient: (client) => axios.post(URL.CREATE_CLIENT, client),
		getAllClaims: () => axios.get(URL.getAllClaims)
	},
	vehicle: {
		addVehicle: (data) => axios.post(URL.CREATE_VEHICLE, data),
		uploadVehicle: (vehicle) => axios.post(URL.CREATE_VEHICLE, vehicle),
		search: (search, term) => axios.post(URL.SEARCH, {search, term}),
		addClaim: (claim, id) => axios.post(URL.ADD_CLAIM, {claim, id})
	},
	claim: {
		addClaim: (data) =>  axios.post(URL.CREATE_CLAIM, data)
	}
};
