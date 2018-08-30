import initialize_state from '../helpers/initialize_state';
import {GET_PROFILE, EDIT_PROFILE,GET_GENDERS} from '../actions/index'

 function profile(state = initialize_state.profile, action) {
    switch (action.type) {
    case GET_PROFILE:
        return {...state,profile:action.data};
        case EDIT_PROFILE:
        return {...state,profile:action.data};
        case GET_GENDERS:
        return {...state,genders:action.data};
        default:
        return state
    }
}

export default profile;