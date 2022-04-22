import {
	useSelector,
	useDispatch,
} from 'react-redux';
import { useState } from 'react';

export function Counter() {
	const cart = useSelector(
		(state) => state.cart
	);

	const [cartData, setCartData] =
		useState(0);

	const countDispatcher = useDispatch();

	const cartAmountWritingHandler = (
		event
	) => {
		setCartData(event.target.value);
	};

	const addAmountToCart = () => {
		countDispatcher({
			type: 'ADDCART',
			payload: cartData,
		});
	};

	return (
		<>
			<h1>
				The Store data {'&'} your cart :
				{cart}
			</h1>

			<input
				type='number'
				value={cartData}
				onInput={
					cartAmountWritingHandler
				}
			/>
			<br />
			<button onClick={addAmountToCart}>
				Add the amount to cart
			</button>
		</>
	);
}
