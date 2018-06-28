import { SEARCH } from '../actions';
import initialize_state from '../helpers/initialize_state';


 function search(state = initialize_state.search, action) {
    switch (action.type) {
    case SEARCH:
        return action.data;
        default:
        return state
    }
}

export default search;