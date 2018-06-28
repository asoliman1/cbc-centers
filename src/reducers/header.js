import { GET_MENU_CATEGORIES } from '../actions';
import initialize_state from '../helpers/initialize_state';


 function header(state = initialize_state.header, action) {
    switch (action.type) {
    case GET_MENU_CATEGORIES:
        return {...state,categories:action.data};
        default:
        return state
    }
}

export default header;