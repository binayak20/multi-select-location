import * as Types from '../actions/types';

const init = {
	state: [],
};

const locationReducer = (state = init, action) => {
	switch (action.type) {
		case Types.LOAD_LOCATION: {
			return action.payload.location;
		}
		default:
			return state;
	}
};

export default locationReducer;
