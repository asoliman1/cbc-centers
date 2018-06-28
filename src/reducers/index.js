import { combineReducers } from 'redux';
import header from './header';
import home from './home';
import courses from './courses';
import search from './search';
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
    courses,
    header,
    home,
    search,
    loadingBar: loadingBarReducer,

})

export default rootReducer;