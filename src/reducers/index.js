import { combineReducers } from 'redux';
import ParksReducer from './reducer_parks';

const rootReducer = combineReducers({
	parks: ParksReducer
});

export default rootReducer;