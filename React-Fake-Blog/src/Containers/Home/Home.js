import './Home.css';
import {
	useSelector,
	useDispatch,
} from 'react-redux';
import {
	useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../../Components';
import { getArticles } from '../../redux/Reducers';

export function Home(properties) {
	const { articles } = useSelector(
		(state) => ({
			...state.articleReducer,
		})
	);

	const dispatcher = useDispatch();

	useEffect(() => {
		if (articles.length === 0) {
			dispatcher(getArticles());
		}

		return () => {};
	});

	return (
		<>
			<h1 className='home-title'>
				All articles
			</h1>
			<main className='container-cards'>
				{articles.map((card) => (
					<Card key={uuidv4()}>
						<h2>{card.title}</h2>
						<Link
						to={`articles/${card.title.replace(/\s+/g, '-').trim()}`}
						state={{
							title: card.title,
							body: card.body
						}}
						>
						Read our stuff
						</Link>
					</Card>
				))}
			</main>
		</>
	);
}
