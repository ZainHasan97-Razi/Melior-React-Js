import { combineReducers } from 'redux';
import searchReducer from './searchReducers';
import authReducer from './authReducers'
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
    searchReducer,
    authReducer,
    bookingReducer
})

export default rootReducer;