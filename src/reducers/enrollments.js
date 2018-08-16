import initialize_state from '../helpers/initialize_state';
import {GET_USER_ENROLLMENTS,GET_COURSE_DETAILS,DO_PAYMENT} from '../actions/index'

 function enrollments(state = initialize_state.enrollments, action) {
    switch (action.type) {
    case GET_USER_ENROLLMENTS:
        return {...state,enrollments:action.data.results};
        case GET_COURSE_DETAILS :
            state.courses.push(action.data)
            return {...state,courses:state.courses}
            case DO_PAYMENT :
            let array = state.enrollments;
            let index = array.findIndex(e=>e.course===action.data.course&&e.status===190);
            array[index] = action.data
            return {...state,enrollments:array}
        default:
        return state
    }
}

export default enrollments;