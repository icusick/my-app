import { combineReducers } from 'redux';
import ParksReducer from './reducer_parks';
import ActivePark from './reducer_active_park';

const rootReducer = combineReducers({
	parks: ParksReducer,
	activePark: ActivePark
});

export default rootReducer;