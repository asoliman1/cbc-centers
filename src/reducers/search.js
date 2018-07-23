import { SEARCH, SEARCH_BY_FILTERS,GET_LANGUAGES } from '../actions';
import initialize_state from '../helpers/initialize_state';


 function search(state = initialize_state.search, action) {
    switch (action.type) {
    case SEARCH:
        return {...state,results:action.data.results,counts:action.data.count}
        case SEARCH_BY_FILTERS:
        return {...state,results:action.data.results,counts:action.data.count}
        case GET_LANGUAGES:
        return {...state,languages:action.data }
        default:
        return state
    }
}

export default search;