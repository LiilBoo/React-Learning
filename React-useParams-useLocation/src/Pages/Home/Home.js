import { Link } from 'react-router-dom';

export function Home() {
	return (
		<>
			<h1>Welcome Home</h1>
			<h1>Welcome Home</h1>
			<p>
				Why is there a wild comma on the
				left ?
			</p>
			<Link
				to='/contact'
				state={'test'}>
				Contact
			</Link>
		</>
	);
}
