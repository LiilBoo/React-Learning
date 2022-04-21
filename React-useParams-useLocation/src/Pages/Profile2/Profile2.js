import { useParams } from 'react-router-dom';

export function Profile2() {
	const params = useParams();
	console.log(params);

	return (
		<>
			<h1>
				Welcome on your profile with
				dynamic route /:id
			</h1>
			<h1>
				Welcome on your profile with
				dynamic route /:id
			</h1>
			<p>
				Check the source code to see
				this useful method of to
				retrieving URL parameters :
				{params.id}
				Use cases example : API, dynamic
				parameters
			</p>
			<p>
				To pass state through links and
				have more info on what
				page/location we are, go check :
				useLocation()
			</p>
		</>
	);
}
