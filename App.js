import React from 'react';
import PhoneBookNavigation from './navigation/PhoneBookNavigation';
import {
	createStore,
	combineReducers,
	applyMiddleware
  } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contactReducer from './store/contact-reducers';

const rootReducer = combineReducers({
	contacts: contactReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
	return (
		<Provider store={store}>
			<PhoneBookNavigation/>
		</Provider>
	);
}