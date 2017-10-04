import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	console.log(action);
	switch (action.type) {
		case FETCH_WEATHER:
		// return NEW state object with new piece of state added. don't morph state!
		return [ ...state, action.payload.data]
	}
	return state;
}