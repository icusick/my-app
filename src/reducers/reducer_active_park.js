export default function(state = [], action) {
	switch(action.type) {
		case 'PARK_SELECTED': 
			return action.payload;
	}
	return state;
}