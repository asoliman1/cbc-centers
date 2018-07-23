import initialize_state from '../helpers/initialize_state';
import {GET_PROFILE, EDIT_PROFILE} from '../actions/index'

 function profile(state = initialize_state.profile, action) {
    switch (action.type) {
    case GET_PROFILE:
        return action.data;
        case EDIT_PROFILE:
        return action.data;
        default:
        return state
    }
}

export default profile;