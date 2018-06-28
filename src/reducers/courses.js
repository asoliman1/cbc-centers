import initialize_state from '../helpers/initialize_state';
import { GET_HOME_NEW_COURSES, GET_HOME_OFFERED_COURSES, GET_HOME_RATED_COURSES, GET_HOME_POPULAR_COURSES } from '../actions';


function courses(state = initialize_state.courses, action) {
    switch (action.type) {
        case GET_HOME_NEW_COURSES:
            return {...state,new:action.data};
        case GET_HOME_OFFERED_COURSES:
            return {...state,offers:action.data};
        case GET_HOME_RATED_COURSES:
            return {...state,rated:action.data};
        case GET_HOME_POPULAR_COURSES:
            return {...state,popular:action.data};
        default:
            return state
    }
}

export default courses;