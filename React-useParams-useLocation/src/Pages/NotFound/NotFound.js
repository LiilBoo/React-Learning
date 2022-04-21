import { useNavigate } from 'react-router-dom';

export function NotFound() {
	const navigate = useNavigate();

	const goHome = () => {
		navigate('/');
	};

	return (
		<>
			<h1>
				Whoops ! Found ! Page doesn't
				exist Maybe I'll go get my
				page404 component
			</h1>
			<button
				onClick={() => navigate('/')}>
				Go page Home ?
			</button>

			<h1>Or with currying</h1>
			<button onClick={goHome}>GO HOME with style</button>
		</>
	);
}
