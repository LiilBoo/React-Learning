import {
	useSelector,
	useDispatch,
} from 'react-redux';
import { useState, useEffect } from 'react';
import { getCatImages } from '../../redux/Reducers';

export function Counter() {

	const {cart, count, imgUrl} = useSelector(
		state => ({
			...state.AddCartReducer,
			...state.CounterReducer,
			...state.DataImgReducer,

		}));
	
		

	const [cartData, setCartData] =
		useState(0);

	const dispatcher = useDispatch();

	const cartAmountWritingHandler = (
		event
	) => {
		setCartData(event.target.value);
	};

	const addAmountToCart = () => {
		dispatcher({
			type: 'ADDCART',
			payload: cartData,
		});
		
	};

	useEffect(() => {
	
		dispatcher(getCatImages());
	
	

	}, [dispatcher]);

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
			<br />
			{ imgUrl && <img style={{width: '300px'}} alt='' src={imgUrl}/>}
		</>
	);
}