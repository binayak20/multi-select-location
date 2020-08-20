import { combineReducers } from 'redux';
import locationReducer from './locationReducer';

const rootReducers = combineReducers({
	location: locationReducer,
});

export default rootReducers;
