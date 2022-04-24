const INITIAL_STATE = {
	articles: [],
};

export function articleReducer(
	state = INITIAL_STATE,
	action
) {
	switch (action.type) {

		case 'NEWARTICLES': 
		const NEW_ARRAY = [action.payload, ...state.articles];
		return {
			...state,
			articles: NEW_ARRAY,
		}
		case 'LOADARTICLES': {
			return {
				...state,
				articles: action.payload,
			};
		}
		default:
			return state;
	};
}

export const getArticles = () => async dispatcher => {
    const RESPONSE =  await fetch('https://jsonplaceholder.typicode.com/posts');

    const API_RESPONSE = await RESPONSE.json();

	// const throwToMiddleware = (
	// 	RESPONSE
	// ) => {
	// 	return dispatcher({
	// 		type: 'LOADARTICLES',
	// 		payload: API_RESPONSE,
	// 	});
	// };

	// return throwToMiddleware(RESPONSE);

	return dispatcher({
		type: 'LOADARTICLES',
		payload: API_RESPONSE,
	});
}
