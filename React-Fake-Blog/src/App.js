import './App.css';
import { Navbar } from './Components';
import {
	AddArticle,
	Article,
	Contact,
	Home,
} from './Containers';
import {
	Routes,
	Route,
} from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home/>}
				/>
				<Route
					path='/write'
					element={<AddArticle/>}
				/>
				<Route
					path='/articles/:slug'
					element={<Article/>}
				/>
				<Route
					path='/contact'
					element={<Contact/>}
				/>
			</Routes>
		</>
	);
}

export default App;
