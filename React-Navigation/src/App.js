import './App.css';
import {
	Routes,
	Route,
} from 'react-router-dom';
import {
	Home,
	Profile,
	Profile2,
	NotFound,
	Contact,
	Services,
} from './Pages';
import {
	Navbar,
	Development,
	Tournaments,
	Coaching,
} from './Components';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/services'
					element={<Services />}>
					<Route
						path='/services/development'
						element={<Development />}
					/>

					<Route
						path='/services/coaching'
						element={<Coaching />}
					/>
					<Route
						path='/services/tournaments'
						element={<Tournaments />}
					/>
				</Route>

				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/profile'
					element={<Profile />}
				/>
				<Route
					path='/profile/:id'
					element={<Profile2 />}
				/>
				<Route
					path='*'
					element={
						<NotFound />
					}></Route>
			</Routes>
		</div>
	);
}

export default App;
