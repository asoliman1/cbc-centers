import initialize_state from '../helpers/initialize_state';
import { GET_HOME_NEW_COURSES, GET_HOME_OFFERED_COURSES, GET_HOME_RATED_COURSES, GET_HOME_POPULAR_COURSES } from '../actions';
import range from 'lodash/range';


function courses(state = initialize_state.courses, action) {
    switch (action.type) {
        case GET_HOME_NEW_COURSES:
         let array = range(0,action.data.results.length,4);
        for (let index = 0; index < array.length; index++) {
            array[index] = action.data.results.slice( array[index] , array[index+1] )
        }
        action.data.results = array;
            return {...state,new:action.data};
        case GET_HOME_OFFERED_COURSES:
         array = range(0,action.data.results.length,4);
        for (let index = 0; index < array.length; index++) {
            array[index] = action.data.results.slice( array[index] , array[index+1] )
        }
        action.data.results = array;
            return {...state,offers:action.data};
        case GET_HOME_RATED_COURSES:
         array = range(0,action.data.results.length,4);
        for (let index = 0; index < array.length; index++) {
            array[index] = action.data.results.slice( array[index] , array[index+1] )
        }
        action.data.results = array;
            return {...state,rated:action.data};
        case GET_HOME_POPULAR_COURSES:
         array = range(0,action.data.results.length,4);
        for (let index = 0; index < array.length; index++) {
            array[index] = action.data.results.slice( array[index] , array[index+1] )
        }
        action.data.results = array;
            return {...state,popular:action.data};
        default:
            return state
    }
}

export default courses;