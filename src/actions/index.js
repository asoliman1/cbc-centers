import { httpService } from "../helpers/http_service";
import { showLoading, hideLoading, resetLoading } from "react-redux-loading-bar";

export const GET_MENU_CATEGORIES = 'GET_MENU_CATEGORIES';
export const GET_HOME_CATEGORIES = 'GET_HOME_CATEGORIES';
export const SEARCH = 'SEARCH';
export const GET_HOME_SLIDER = 'GET_HOME_SLIDER';
export const GET_HOME_EVENTS_NOTIFICATIONS = 'GET_HOME_EVENTS_NOTIFICATIONS';
export const GET_HOME_CATEGORY_ITEMS = 'GET_HOME_CATEGORY_ITEMS';
export const GET_HOME_CLASSIFIED_COURSE_SEARCH = 'GET_HOME_CLASSIFIED_COURSE_SEARCH';
export const GET_HOME_POPULAR_COURSES = 'GET_HOME_POPULAR_COURSES';
export const GET_HOME_RATED_COURSES = 'GET_HOME_RATED_COURSES'
export const GET_HOME_OFFERED_COURSES = 'GET_HOME_OFFERED_COURSES'
export const GET_HOME_NEW_COURSES = 'GET_HOME_NEW_COURSES'



export function search(text, page, size) {
    return function(dispatch) {
        dispatch(showLoading('search'))
      return httpService.search(text,page,size).then(data => {
        dispatch(loadSuccess(SEARCH,data.data));
        dispatch(hideLoading('search'))
      }).catch(error => {
        dispatch(resetLoading('search'));
        throw(error);
      });
    };
}

export function menuCat() {  
    return function(dispatch) {
        dispatch(showLoading('menucat'))
      return httpService.menuCat().then(data => {
        dispatch(loadSuccess(GET_MENU_CATEGORIES,data.data));
        dispatch(hideLoading('menucat'))
      }).catch(error => {
        dispatch(resetLoading('menucat'));
        throw(error);
      });
    };
  }

export function homeSlider() {
    return function(dispatch) {
        dispatch(showLoading('homeslider'))
      return httpService.homeSlider().then(data => {
        dispatch(loadSuccess(GET_HOME_SLIDER,data.data));
        dispatch(hideLoading('homeslider'))
      }).catch(error => {
        dispatch(resetLoading('homeslider'));
        throw(error);
      });
    };
}

export function homeEventNotif() {
    return function(dispatch) {
        dispatch(showLoading('homeEvents'))
      return httpService.homeEventNotif().then(data => {
        dispatch(loadSuccess(GET_HOME_EVENTS_NOTIFICATIONS,data.data));
        dispatch(hideLoading('homeEvents'))
      }).catch(error => {
        dispatch(resetLoading('homeEvents'));
        throw(error);
      });
    };
}

export function homeCatList() {
    return function(dispatch) {
        dispatch(showLoading('homecat'))
      return httpService.homeCatList().then(data => {
        dispatch(loadSuccess(GET_HOME_CATEGORIES,data.data));
        dispatch(hideLoading('homecat'))
      }).catch(error => {
        dispatch(resetLoading('homecat'));
        throw(error);
      });
    };
}

export function homeCatItems(id, page, size) {
    return function(dispatch) {
        dispatch(showLoading('homecatitem'))
      return httpService.homeCatItems(id,page,size).then(data => {
        dispatch(loadSuccess(GET_HOME_CATEGORY_ITEMS,data.data));
        dispatch(hideLoading('homecatitem'))
      }).catch(error => {
        dispatch(resetLoading('homecatitem'));
        throw(error);
      });
    };
  
}

export function homeRatCourses(page, size) {
    return function(dispatch) {
        dispatch(showLoading('homeratedcourses'))
      return httpService.homeClassfCourseSerach('RATED',page,size).then(data => {
        dispatch(loadSuccess(GET_HOME_RATED_COURSES,data.data));
        dispatch(hideLoading('homeratedcourses'))
      }).catch(error => {
        dispatch(resetLoading('homeratedcourses'));
        throw(error);
      });
    };
}

export function homeOffCourses( page, size) {
    return function(dispatch) {
        dispatch(showLoading('homeoffcourses'))
      return httpService.homeClassfCourseSerach('OFFERED',page,size).then(data => {
        dispatch(loadSuccess(GET_HOME_OFFERED_COURSES,data.data));
        dispatch(hideLoading('homeoffcourses'))
      }).catch(error => {
        dispatch(resetLoading('homeoffcourses'));
        throw(error);
      });
    };
}

export function homeNewCourses( page, size) {
    return function(dispatch) {
        dispatch(showLoading('homenewcourses'))
      return httpService.homeClassfCourseSerach('NEW',page,size).then(data => {
        dispatch(loadSuccess(GET_HOME_NEW_COURSES,data.data));
        dispatch(hideLoading('homenewcourses'))
      }).catch(error => {
        dispatch(resetLoading('homenewcourses'));
        throw(error);
      });
    };
}

export function homePopCourses( page, size) {
    return function(dispatch) {
        dispatch(showLoading('homepopcourses'))
      return httpService.homeClassfCourseSerach('POPULAR',page,size).then(data => {
        dispatch(loadSuccess(GET_HOME_POPULAR_COURSES,data.data));
        dispatch(hideLoading('homepopcourses'))
      }).catch(error => {
        dispatch(resetLoading('homepopcourses'));
        throw(error);
      });
    };
}


export function loadSuccess(type,data) {  
    return {type: type, data};
  }