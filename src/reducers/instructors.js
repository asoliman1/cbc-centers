import initialize_state from '../helpers/initialize_state';
import {GET_ALL_INSTRUCTORS} from '../actions/index'

 function instructors(state = initialize_state.instructors, action) {
    switch (action.type) {
    case GET_ALL_INSTRUCTORS:
        return action.data;
        default:
        return state
    }
}

export default instructors;