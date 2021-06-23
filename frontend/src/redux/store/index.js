import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composed = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, composed);

export default store;
