const INITIAL_STATE = {
	count: 94,
};

export function AddCartReducer(
	state = INITIAL_STATE,
	action
) {
	switch (action.type) {
		case 'ADDCART': {
			return {
				...state,
				// count: state.count + 1,
			};
		}

		default:
			return state;
	}
}