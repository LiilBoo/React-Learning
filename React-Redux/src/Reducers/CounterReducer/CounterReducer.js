const INITIAL_STATE = {
	count: 94,
};

export function CounterReducer(
	state = INITIAL_STATE,
	action
) {
	switch (action.type) {
		case 'increment': {
			return {
				...state,
				count: state.count + 1,
			};
		}
		case 'decrease': {
			return {
				...state,
				count: state.count - 1,
			};
		}
		default:
			return state;
	}
}
