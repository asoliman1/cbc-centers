import initialize_state from '../helpers/initialize_state';
import {GET_USER_ENROLLMENTS,GET_COURSE_DETAILS} from '../actions/index'

 function enrollments(state = initialize_state.enrollments, action) {
    switch (action.type) {
    case GET_USER_ENROLLMENTS:
        return {...state,enrollments:action.data.results};
        case GET_COURSE_DETAILS :
            state.courses.push(action.data)
            return {...state,courses:state.courses}
        default:
        return state
    }
}

export default enrollments;