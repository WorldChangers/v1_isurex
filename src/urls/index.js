const ROOT_URL = 'https://insurex-api.herokuapp.com/api/v1';
//const ROOT_URL = 'http://localhost:3000/api/v1'

export default {
	LOGIN: `${ROOT_URL}/users/login`,
	SIGNUP: `${ROOT_URL}/users/signup`,
	CREATE_CLIENT: `${ROOT_URL}/clients`,
	ADD_CLAIM: `${ROOT_URL}/vehicles/addClaims`,
	CREATE_VEHICLE:`${ROOT_URL}/vehicles/claims`,
	SEARCH:`${ROOT_URL}/vehicles/search`,
	getAllClaims: `${ROOT_URL}/clients`
};
