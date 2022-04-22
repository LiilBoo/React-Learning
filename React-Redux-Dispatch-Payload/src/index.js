import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
	CounterReducer,
	AddCartReducer,
} from './Reducers';

const Store = createStore(
	AddCartReducer,
);

const root = ReactDOM.createRoot(
	document.getElementById('root')
);
root.render(
	<React.StrictMode>
		<Provider store={Store}>
			<App />
		</Provider>
	</React.StrictMode>
);
