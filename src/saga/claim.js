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

    //yield put({type: START_CALL})

    for(let i=0; i < action.files.length;i++){
      const fullname = action.files[i]['Fullname']
      // const phone = data['Phone Number']
      // const idType = data['ID Type']
      // const idNumber = data['ID Number']
      // const location = data['Location']
      // const fraud = data['Fraud']
      const regNumber = action.files[i]['Registration Number']
      call(API.vehicle.uploadVehicle({regNumber}))
      call(API.client.uploadClient({fullname}))
    }
  
  //  yield action.files.map(function*(data){
  //     console.log(data)
  //     // const fullname = data['Fullname']
  //     // const phone = data['Phone Number']
  //     // const idType = data['ID Type']
  //     // const idNumber = data['ID Number']
  //     // const location = data['Location']
  //     // const fraud = data['Fraud']
  //     // const regNumber = data['Registration Number']
  //     // yield call(API.vehicle.uploadVehicle({regNumber}))
  //     // yield call(API.client.uploadClient({fullname, phone, idType, idNumber, location, fraud}))
  //     //axios.post()
  //   })
    
  } catch (e) {
    console.log(e)
  }
}