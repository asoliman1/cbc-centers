import {
    GET_HOME_CATEGORY_ITEMS,
    GET_HOME_SLIDER,
    GET_HOME_EVENTS_NOTIFICATIONS,
} from '../actions';
import initialize_state from '../helpers/initialize_state';


function home(state = initialize_state.home, action) {
    switch (action.type) {
        case GET_HOME_CATEGORY_ITEMS:
        return {...state,category_items:{results:[...action.data.results]}};

        case GET_HOME_SLIDER:
        return {...state,slider:action.data};

        case GET_HOME_EVENTS_NOTIFICATIONS:
        return {...state,events_notifications:action.data};

        default:
            return state
    }
}

export default home