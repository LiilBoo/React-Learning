import './NavBar.css';
import { Link } from 'react-router-dom';
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
						<Link to='/'>Home</Link>
					</li>
					<li className='items'>
						<Link to='/write'>
						Write new article
						</Link>
					</li>
					<li className='items'>
						<Link to='/contact'>
						Contact
						</Link>
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
