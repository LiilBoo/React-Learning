import { Link, Outlet } from 'react-router-dom';


export function Services() {
	return (
		<>
			<h1>Welcome to Services</h1>
			<h1>Welcome to Services</h1>
			<nav>
				<Link to='/services/development'>
					Development
				</Link>
				<Link to='/services/tournaments'>
					Tournaments
				</Link>
				<Link to='/services/coaching'>
					Coaching
				</Link>
			</nav>
            <Outlet/>
		</>
	);
}
