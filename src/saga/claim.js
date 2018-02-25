import { call, put } from 'redux-saga/effects';
import { START_CALL, END_CALL, ERROR_CALL,CLIENT_FETCHED } from '../actions/types';
import API from '../API';

export function* addClaimSaga(action) {
  try {
    const client  = yield JSON.parse(localStorage.getItem('client'))
    const vehicle  = yield JSON.parse(localStorage.getItem('vehicle'))
    const claim  = yield JSON.parse(localStorage.getItem('claim'))

    yield put({type: START_CALL})
    const res = yield call(API.client.addClient, client)
    
    yield vehicle.owner = res.data.clientId
    
    const veh = yield call(API.vehicle.addVehicle, vehicle)

    yield claim.vehicle = veh.data.vehicleId
    
    const cl = yield call(API.claim.addClaim, claim)

    // Remove Storage items
    yield localStorage.removeItem('client')
    yield localStorage.removeItem('vehicle')
    yield localStorage.removeItem('claim')

    action.history.push('/')
  } catch (e) {
     yield put({type: ERROR_CALL})
  }
}


export function* fetchClientsSaga(action) {
  try {
    
    yield put({type: START_CALL})

    const res = yield call(API.client.getAllClaims)
    const data = res.data
    yield put({type: CLIENT_FETCHED, data})
    //console.log(res)
  } catch (e) {
    yield put({type: ERROR_CALL})
  }
}

