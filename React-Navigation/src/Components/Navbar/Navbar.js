import './Navbar.css';
import {
	useState,
	useEffect,
} from 'react';
import {
	Link,
	NavLink,
} from 'react-router-dom';

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
		<nav class='official-navbar'>
			{(toggleMenu ||
				browserWidth > 500) && (
				<ul className='list'>
					<li className='items'>
						<NavLink
							to='/'
							className={({
								isActive,
							}) =>
								isActive
									? 'activeLink'
									: ''
							}>
							Home
						</NavLink>
					</li>
					<li className='items'>
						<NavLink
							to='/services'
							className={({
								isActive,
							}) =>
								isActive
									? 'activeLink'
									: ''
							}>
							Services
						</NavLink>
					</li>
					<li className='items'>
						<NavLink
							to='/contact'
							className={({
								isActive,
							}) =>
								isActive
									? 'activeLink'
									: ''
							}>
							Contact
						</NavLink>
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
