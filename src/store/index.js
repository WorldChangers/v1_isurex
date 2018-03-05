import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AuthReducer from '../reducers/auth';
import ClaimReducer from '../reducers/claim';
import UIReducer from '../reducers/ui'
import SearchReducer from '../reducers/search'

import rootSaga from '../saga';
import { AUTH_USER } from '../actions/types';

const rootReducer = combineReducers({
	auth: AuthReducer,
	clients: ClaimReducer,
	ui: UIReducer,
	search: SearchReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const user = JSON.parse(localStorage.getItem('user'));

// If we have a token, consider the user to be signed in
if (user && user.token) {
	store.dispatch({ type: AUTH_USER });
}

sagaMiddleware.run(rootSaga);

export default store;
