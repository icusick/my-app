import { combineReducers } from 'redux';
import ParksReducer from './reducer_parks';
import ActivePark from './reducer_active_park';
import WeatherReducer from './reducer_weather';

// this puts parks, activePark, etc into the global application state
const rootReducer = combineReducers({
	parks: ParksReducer,
	activePark: ActivePark,
	weather: WeatherReducer
});

export default rootReducer;