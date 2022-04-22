import {
	createStore,
	combineReducers,
	applyMiddleware,
} from 'redux';
import {
	CounterReducer,
	AddCartReducer,
	DataImgReducer,
} from './Reducers';
import  thunk  from 'redux-thunk';

const rootReducer = combineReducers({
	CounterReducer,
	AddCartReducer,
	DataImgReducer,
});

export const Store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);
