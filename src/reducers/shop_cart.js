import { GET_COURSE_ROUNDS,CREATE_SHOPCART,ENROLLMENT_SUCCESSFULL, GET_USER_SHOPCARTS } from '../actions';
import initialize_state from '../helpers/initialize_state';


function shop_cart(state = initialize_state.shop_cart, action) {
    switch (action.type) {
        case GET_COURSE_ROUNDS:
            let array = state.rounds.concat(action.data)
            return { ...state, rounds: array };
             case CREATE_SHOPCART :
            return {...state,shop_cart:action.data};
             case GET_USER_SHOPCARTS :
            return {...state,shop_cart:action.data.filter(e=>e.status===118)[0]};
             case ENROLLMENT_SUCCESSFULL :
            return {...state,shop_cart:{}};
        default:
            return state
    }
}

export default shop_cart;