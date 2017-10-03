export default function(state = null, action) {
	switch(action.type) {
	case 'PARK_SELECTED': 
			return action.payload;
	}
	return state;
}