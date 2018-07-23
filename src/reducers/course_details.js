import initialize_state from '../helpers/initialize_state';
import {GET_COURSE_MODULES,GET_COURSE_DESCRIBTION,GET_COURSE_DETAILS,GET_COURSE_INSTRUCTORS} from '../actions/index'

 function course_details(state = initialize_state.course_details, action) {
    switch (action.type) {
        case GET_COURSE_MODULES :
            return {...state,modules:action.data}
            case GET_COURSE_DESCRIBTION :
            return {...state,describtion:action.data}
            case GET_COURSE_DETAILS :
            return {...state,course:action.data}
            case GET_COURSE_INSTRUCTORS :
            return {...state,instructors:action.data}
        default:
        return state
    }
}

export default course_details;