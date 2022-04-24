import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { articleReducer } from './Reducers';

const RootReducer = combineReducers({
    articleReducer,
});

export const STORE = createStore(RootReducer, applyMiddleware(thunk));

