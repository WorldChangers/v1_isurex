const ROOT_URL = 'https://insurex-api.herokuapp.com/api/v1';
//const ROOT_URL = 'http://localhost:3000/api/v1'

export default {
	LOGIN: `${ROOT_URL}/users/login`,
	SIGNUP: `${ROOT_URL}/users/signup`,
	CREATE_CLIENT: `${ROOT_URL}/clients`,
	CREATE_VEHICLE:`${ROOT_URL}/vehicles`,
	CREATE_CLAIM:`${ROOT_URL}/claims`,
	getAllClaims: `${ROOT_URL}/clients`
};
