import { GET_USER_SHOPCARTS, ADD_TO_USER_SHOPCART, REMOVE_ITEM_FROM_SHOPCART, ENROLLMENT_SUCCESSFULL } from '../actions';
import initialize_state from '../helpers/initialize_state';


function shop_carts(state = initialize_state.shopcarts, action) {
    switch (action.type) {
        case ENROLLMENT_SUCCESSFULL:
            return { ...state, content: action.data.content, size: action.data.size, total_price: action.data.total_price }
        case ADD_TO_USER_SHOPCART:
            let size = state.size + 1;
            return { ...state, size: size }
        case REMOVE_ITEM_FROM_SHOPCART:
            size = state.size - 1;
            let array = state.content
            let items = state.content[action.data.index].items.filter(e => e.id !== action.data.id);
            array[action.data.index].items = items;
            total_price = 0;
            array.forEach(element => {
                element.items.forEach(e => {
                    total_price += e.price;
                })
            });
            return { ...state, size: size, content: array, total_price: total_price }
        case GET_USER_SHOPCARTS:
            let total_price = 0;
            let total_size = 0;
            action.data.forEach(element => {
                total_size += element.items.length;
                element.items.forEach(e => {
                    total_price += e.price;
                })
            });
            total_price = parseFloat(total_price).toFixed(3);
            return { ...state, size: total_size, content: action.data, total_price: total_price }
        default:
            return state
    }
}

export default shop_carts;