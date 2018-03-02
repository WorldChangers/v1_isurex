import { call, put } from 'redux-saga/effects';
import { START_CALL, END_CALL, ERROR_CALL,CLIENT_FETCHED } from '../actions/types';
import API from '../API';

export function* addClaimSaga(action) {
  try {
    const client  = yield JSON.parse(localStorage.getItem('client'))
    const vehicle  = yield JSON.parse(localStorage.getItem('vehicle'))
    const claim  = yield JSON.parse(localStorage.getItem('claim'))


    const user =  yield JSON.parse(localStorage.getItem('user'))
    yield claim.company = user.company 
    
 
    
    yield put({type: START_CALL})

    if(client === null && vehicle === null){
      const id = yield localStorage.getItem('vehicleId')
      yield call(API.vehicle.addClaim, claim, id)
      yield localStorage.removeItem('claim')

      yield action.history.push('/')
    }

    yield vehicle.claims = [claim]
    yield vehicle.company = user.company

    const res = yield call(API.client.addClient, client)

   
    yield vehicle.owner = res.data.clientId
    
    yield call(API.vehicle.addVehicle, vehicle)

    // Remove Storage items
    yield localStorage.removeItem('client')
    yield localStorage.removeItem('vehicle')
    yield localStorage.removeItem('claim')

    action.history.push('/claims')
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


export function* searchSaga(action) {
  try {

    yield put({type: START_CALL})

    const res = yield call(API.vehicle.search, action.search, action.term)

    if(res.data.vehicle_id){
      yield localStorage.setItem('vehicleId', res.data.vehicle._id)
    } else {
      yield localStorage.setItem('vehicleId', res.data._id)
    }
   
    yield action.history.push({
      pathname: '/search',
      state: {...res.data }
    })

    yield put({type: END_CALL})

  }catch(e){
    //console.log(e)
    yield put({type: ERROR_CALL})
    
  }
}