import { LOGIN_FAILED, REGISTER_FAILED,LOGIN_SUCCESSFULL,REGISTER_SUCCESSFULL } from '../actions';
import initialize_state from '../helpers/initialize_state';


function Login_Register(state = initialize_state.login_register, action) {
    switch (action.type) {
        case LOGIN_FAILED:
            return { ...state, login: { errors: action.data.error } };
        case REGISTER_FAILED:
            return { ...state, register: action.data };
            case LOGIN_SUCCESSFULL:
            return { ...state, login: {errors:[]} };
            case REGISTER_SUCCESSFULL:
            return { ...state, register: {errors:[]} };
        default:
            return state
    }
}

export default Login_Register;