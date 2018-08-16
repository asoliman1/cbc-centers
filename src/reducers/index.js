import { combineReducers } from 'redux';
import header from './header';
import home from './home';
import courses from './courses';
import search from './search';
import wishlist from './wishlist';
import Login_Register from './login_register';
import Authentication from './auth';
import profile from './profile'
import shop_cart from './shop_cart'
import shop_carts from './shop_carts'
import enrollments from './enrollments'
import course_details from './course_details';
import language from './language';
import instructors from './instructors';

import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
    instructors,
    language,
    course_details,
    enrollments,
    shop_carts,
    shop_cart,
    profile,
    wishlist,
    courses,
    header,
    home,
    search,
    Login_Register,
    Authentication,
    loadingBar: loadingBarReducer,

})

export default rootReducer;