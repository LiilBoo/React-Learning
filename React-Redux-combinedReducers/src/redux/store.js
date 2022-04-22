import { createStore, combineReducers } from 'redux';
import {
	CounterReducer,
	AddCartReducer,
} from './Reducers';

const rootReducer = combineReducers({
	CounterReducer,
	AddCartReducer
});

export const Store = createStore(
	rootReducer
);