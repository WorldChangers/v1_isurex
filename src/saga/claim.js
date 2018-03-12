import { call, put } from 'redux-saga/effects';
import { START_CALL, END_CALL, ERROR_CALL,CLIENT_FETCHED,SEARCH_RESULT } from '../actions/types';
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


    //const user = yield JSON.parse(localStorage.getItem('user'))

    yield user.clients.push(1)

    yield localStorage.setItem('user', JSON.stringify(user));

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
   
    yield localStorage.setItem('search', JSON.stringify(res.data))
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



export function* uploadDataSaga(action){
  try {

    const user =  yield JSON.parse(localStorage.getItem('user'))

    yield put({type: START_CALL})

    for(let am of action.files){
      
      const name = am['Fullname']
      const phone = am['Phone Number']
      const idType = am['ID Type']
      const idNumber = am['ID Number']
      const location = am['Location']
      const fraud = am['Fraud']
      const regNumber = am['Registration Number']
      const chassisNumber = am['Chassis Number']
      const purpose = am['Purpose Of Vehicle']
      const policyNumber = am['Policy Number']
      const insuranceType = am['Insurance Type']

      const type = am['Type Incidence']
      const date = am['Date Incident Occured']
      const driver = am['Person Driving']
      const claimfraud = am['Was the Claim Fraud ?']
      const paid = am['Has the Claim been Paid?']
      const description = am['Description']
      const placeReported = am['Where was it reported ?']

      // Compiling the client info
      const client = {name, phone, idType, idNumber,location, fraud, regNumber}

      // Vehicle object
      const vehicle = {regNumber,chassisNumber, purpose, policyNumber, insuranceType}
      yield vehicle.company = user.company 

      // Claims object
      const claims = {type, date, driver, fraud, paid, description, placeReported}
      yield claims.company = user.company
      yield vehicle.claims = [claims]

      //Making the call
      const res = yield call(API.client.uploadClient, client)

      console.log(res.data)
      yield vehicle.owner = res.data.clientId
      const veh = yield call(API.vehicle.uploadVehicle, vehicle)
      console.log(veh)
    }

    yield put({type: END_CALL})
    yield action.history.push('/claims')
    
  } catch (e) {
    console.log(e)
  }
}