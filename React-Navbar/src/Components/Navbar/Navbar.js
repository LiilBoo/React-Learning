import './NavBar.css';
import {
	useState,
	useEffect,
} from 'react';

export function Navbar() {
	const [toggleMenu, setToggleMenu] =
		useState(false);

	const [
		browserWidth,
		setbrowserWidth,
	] = useState(window.innerWidth);

	useEffect(() => {
		const changeWidth = () => {
			setbrowserWidth(
				window.innerWidth
			);
		};

		window.addEventListener(
			'resize',
			changeWidth
		);

		return () => {
			window.removeEventListener(
				'resize',
				changeWidth
			);
		};
	}, []);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	return (
		<nav>
			{(toggleMenu ||
				browserWidth > 500) && (
				<ul className='list'>
					<li className='items'>
						Home
					</li>
					<li className='items'>
						Services
					</li>
					<li className='items'>
						Contact
					</li>
				</ul>
			)}
			<button
				onClick={toggleNav}
				className='btn'>
				BTN
			</button>
		</nav>
	);
}
