import initialize_state from '../helpers/initialize_state';
import {CHANGE_LANGUAGE} from '../actions/index'

 function language(state = initialize_state.language, action) {
    switch (action.type) {
    case CHANGE_LANGUAGE:

    localStorage.setItem('language',action.data.language);

    if(localStorage.getItem('language')==='ar'){
        require('moment/locale/ar-sa')
      }else{
        require('moment/locale/en-au');
      }
      window.location.reload(true);
        return {...state,code:action.data.language};
        default :
        return state
    }
}

export default language;