import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

 
const store = createStore(rootReducer,applyMiddleware(thunk,loadingBarMiddleware(),createLogger()));

export default store;