const INITIAL_STATE = {
	imgUrl: '',
};

export function DataImgReducer(
	state = INITIAL_STATE,
	action
) {
	switch (action.type) {
		case 'LOADING': {
			return {
				...state,
				imgUrl: action.payload,
			};
		}

		default:
			return state;
	}
}

export const getCatImages =
	() => async (dispatcher) => {
		const apiReponse = await fetch(
			'https://api.thecatapi.com/v1/images/search'
		);

		const data =
			await apiReponse.json();

		const throwToMiddleware = (
			data
		) => {
			return dispatcher({
				type: 'LOADING',
				payload: data[0].url,
			});
		};

		return throwToMiddleware(data);
	};
