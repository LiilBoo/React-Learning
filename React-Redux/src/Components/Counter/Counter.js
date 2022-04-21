import {
	useSelector,
	useDispatch,
} from 'react-redux';

export function Counter() {
	const count = useSelector(
		(state) => state.count
	);

	const countDispatcher = useDispatch();

	const increaseFunction = () => {
		countDispatcher({
			type: 'increment',
		});
        console.log('+1');
	};
	const decreaseFunction = () => {
		countDispatcher({
			type: 'decrease',
		});
        console.log('-1');
	};

	return (
		<>
			<h1>The Store data : {count}</h1>
			<button
				onClick={decreaseFunction}>
				-1
			</button>
			<button
				onClick={increaseFunction}>
				+1
			</button>
		</>
	);
}
