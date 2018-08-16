import { GET_USER_WISHLIST, ADD_TO_USER_WISHLIST, REMOVE_ITEM_FROM_WISHLIST,HOME_WISHLIST } from '../actions';
import initialize_state from '../helpers/initialize_state';


function wishlist(state = initialize_state.wishlist, action) {
    switch (action.type) {
        case GET_USER_WISHLIST:
            return { ...state, content: action.data, size: action.data.length }
        case ADD_TO_USER_WISHLIST:
            let size = state.size + 1;
            return { ...state, size: size,mini:[...state.mini.concat([action.data])] }
        case REMOVE_ITEM_FROM_WISHLIST:
            size = state.size - 1;
            return { ...state, size: size, content: [...state.content.filter(e=>e.id!==action.data)],mini:state.mini.filter(e=>e.id!==action.data) }
        case HOME_WISHLIST:
            return { ...state, mini:action.data.results }
        default:
            return state
    }
}

export default wishlist;