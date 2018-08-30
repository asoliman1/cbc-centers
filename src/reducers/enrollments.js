import initialize_state from '../helpers/initialize_state';
import { GET_USER_ENROLLMENTS, DO_PAYMENT } from '../actions/index'

function enrollments(state = initialize_state.enrollments, action) {
    switch (action.type) {
        case GET_USER_ENROLLMENTS:
            return { ...state, enrollments: action.data.results, counts: action.data.count };
        case DO_PAYMENT:
            let array = state.enrollments.filter(e=>e.id!==action.data.id);
            return { ...state, enrollments: array }
        default:
            return state
    }
}

export default enrollments;