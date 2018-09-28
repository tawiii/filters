import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store
