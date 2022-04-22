const INITIAL_STATE = {
	cart: 0,
};

export function AddCartReducer(
	state = INITIAL_STATE,
	action
) {
	switch (action.type) {
		
		case 'ADDCART': {
			return {
				...state,
				cart: action.payload
			};
		}
	}

	return state;
}