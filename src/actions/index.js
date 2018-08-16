import { httpService } from "../helpers/http_service";
import { showLoading, hideLoading, resetLoading } from "react-redux-loading-bar";
import {  notification ,Modal, Alert } from 'antd';
import store from '../helpers/store';

export const GET_MENU_CATEGORIES = 'GET_MENU_CATEGORIES';
export const GET_HOME_CATEGORIES = 'GET_HOME_CATEGORIES';
export const SEARCH = 'SEARCH';
export const GET_HOME_SLIDER = 'GET_HOME_SLIDER';
export const GET_HOME_EVENTS_NOTIFICATIONS = 'GET_HOME_EVENTS_NOTIFICATIONS';
export const GET_HOME_CATEGORY_ITEMS = 'GET_HOME_CATEGORY_ITEMS';
export const GET_HOME_CLASSIFIED_COURSE_SEARCH = 'GET_HOME_CLASSIFIED_COURSE_SEARCH';
export const GET_HOME_POPULAR_COURSES = 'GET_HOME_POPULAR_COURSES';
export const GET_HOME_RATED_COURSES = 'GET_HOME_RATED_COURSES';
export const GET_HOME_OFFERED_COURSES = 'GET_HOME_OFFERED_COURSES';
export const GET_HOME_NEW_COURSES = 'GET_HOME_NEW_COURSES';
export const GET_TAGS = 'GET_TAGS';
export const GET_USER_ENROLLMENTS = 'GET_USER_ENROLLMENTS';
export const GET_COURSE_DETAILS = 'GET_COURSE_DETAILS';
export const CHECK_ENROLLMENT = 'CHECK_ENROLLMENT';
export const GET_IMAGE_URL = 'GET_IMAGE_URL';
export const SEARCH_COURSES_BY_TAG = 'SEARCH_COURSES_BY_TAG';
export const GET_COURSES_BY_CATEGORY = 'GET_COURSES_BY_CATEGORY';
export const LOGIN_SUCCESSFULL = 'LOGIN_SUCCESSFULL';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const REGISTER_SUCCESSFULL = 'REGISTER_SUCCESSFULL';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const OBTAIN_TOKEN = 'OBTAIN_TOKEN';
export const GET_USER_WISHLIST = 'GET_USER_WISHLIST';
export const GET_USER_SHOPCARTS = 'GET_USER_SHOPCARTS';
export const ADD_TO_USER_WISHLIST = 'ADD_TO_USER_WISHLIST';
export const ADD_TO_USER_SHOPCART = 'ADD_TO_USER_SHOPCART';
export const REMOVE_ITEM_FROM_WISHLIST = 'REMOVE_ITEM_FROM_WISHLIST';
export const DO_PAYMENT = 'DO_PAYMENT';
export const COURSE_ENROLL = 'COURSE_ENROLL';
export const CHECK_AUTHENTICATION = 'CHECK_AUTHENTICATION';
export const LOGOUT = 'LOGOUT';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_COURSE_ROUNDS = 'GET_COURSE_ROUNDS'
export const REMOVE_ITEM_FROM_SHOPCART = 'REMOVE_ITEM_FROM_SHOPCART'
export const CREATE_SHOPCART = 'CREATE_SHOPCART'
export const ENROLLMENT_SUCCESSFULL = 'ENROLLMENT_SUCCESSFULL';
export const UNACTIVATE_SHOPCART = 'UNACTIVATE_SHOPCART';
export const GET_COURSE_MODULES = 'GET_COURSE_MODULES';
export const GET_COURSE_DESCRIBTION = 'GET_COURSE_DESCRIBTION';
export const SEARCH_BY_FILTERS = 'SEARCH_BY_FILTERS';
export const GET_COURSE_INSTRUCTORS = 'GET_COURSE_INSTRUCTORS';
export const GET_LANGUAGES = 'GET_LANGUAGES';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const CONTACT_US = 'CONTACT_US';
export const REMEMBER_ME = 'REMEMBER_ME';
export const HOME_WISHLIST = 'HOME_WISHLIST';
export const SHARE = 'SHARE';
export const GET_ALL_INSTRUCTORS = 'GET_ALL_INSTRUCTORS';

const openNotificationWithIcon = (type,title,message) => {
  notification.config({
      placement: store.getState().language.code==='ar'?'bottomLeft': 'bottomRight',
      bottom: 20,
      duration: 3,
    });
  notification[type]({
    message: title,
    description: message
  });
};

function successModal(title,content) {
  const modal = Modal.success({
    title: title,
    content: content,
  });
  setTimeout(() => modal.destroy(), 4000);
}

export function search(text, page, size) {
  return function (dispatch) {
    dispatch(showLoading('search'))
    return httpService.search(text, page, size).then(data => {
      dispatch(loadSuccess(SEARCH, data.data));
      dispatch(hideLoading('search'))
    }).catch(error => {
      // console.log(error);
    });
  };
}

export function searchByfilters(category='',sub_category='',language='',type='',text='', page='1', size='10') {
  return function (dispatch) {
    dispatch(showLoading('searchbyfilters'))
    return httpService.searchByfilters(category,sub_category,language,type,text, page, size).then(data => {
      dispatch(loadSuccess(SEARCH_BY_FILTERS, data.data));
      dispatch(hideLoading('searchbyfilters'))
    }).catch(error => {
      // console.log(error);
    });
  };
}



export function menuCat() {
  return function (dispatch) {
    dispatch(showLoading('menucat'))
    return httpService.menuCat().then(data => {
      dispatch(loadSuccess(GET_MENU_CATEGORIES, data.data));
      dispatch(hideLoading('menucat'))
      dispatch(homeCatList(store.getState().header.categories[0].id))
    }).catch(error => {
      dispatch(resetLoading())
      // console.log(error);
    });
  };
}

export function getInstructors() {
  return function (dispatch) {
    dispatch(showLoading('instructors'))
    return httpService.getInstructors().then(data => {
      dispatch(loadSuccess(GET_ALL_INSTRUCTORS, data.data));
      dispatch(hideLoading('instructors'))
    }).catch(error => {
      // console.log(error);
    });
  };
}

export function homeSlider() {
  return function (dispatch) {
    dispatch(showLoading('homeslider'))
    return httpService.homeSlider().then(data => {
      dispatch(loadSuccess(GET_HOME_SLIDER, data.data));
      dispatch(hideLoading('homeslider'))
    }).catch(error => {
      // console.log(error);
    });
  };
}

export function rememberMe(status) {
  return function (dispatch) {
      dispatch(loadSuccess(REMEMBER_ME,status));
  };
}

export function homeEventNotif() {
  return function (dispatch) {
    dispatch(showLoading('homeEvents'))
    return httpService.homeEventNotif().then(data => {
      dispatch(loadSuccess(GET_HOME_EVENTS_NOTIFICATIONS, data.data));
      dispatch(hideLoading('homeEvents'))
    }).catch(error => {
      // console.log(error);
    });
  };
}

export function homeCatList(category) {
  return function (dispatch) {
    dispatch(showLoading('homecat'))
    return httpService.homeCatList(category).then(data => {
      dispatch(loadSuccess(GET_HOME_CATEGORY_ITEMS, data.data));
      dispatch(hideLoading('homecat'))
    }).catch(error => {
      // console.log(error);
    });
  };
}

export function homeCatItems(id, page, size) {
  return function (dispatch) {
    dispatch(showLoading('homecatitem'))
    return httpService.homeCatItems(id, page, size).then(data => {
      dispatch(loadSuccess(GET_HOME_CATEGORY_ITEMS, data.data));
      dispatch(hideLoading('homecatitem'))
    }).catch(error => {
      // console.log(error);
    });
  };

}

export function courseModules(id) {
  return function (dispatch) {
    dispatch(showLoading('coursemodules'))
    return httpService.courseModules(id).then(data => {
      dispatch(loadSuccess(GET_COURSE_MODULES, data.data));
      dispatch(hideLoading('coursemodules'))
    }).catch(error => {
      // console.log(error);
    });
  };

}

export function courseDesc(id) {
  return function (dispatch) {
    dispatch(showLoading('coursedesc'))
    return httpService.courseDesc(id).then(data => {
      dispatch(loadSuccess(GET_COURSE_DESCRIBTION, data.data));
      dispatch(hideLoading('coursedesc'))
    }).catch(error => {
      // console.log(error);
    });
  };

}

export function homeRatCourses(page, size) {
  return function (dispatch) {
    dispatch(showLoading('homeratedcourses'))
    return httpService.homeClassfCourseSerach('total_raters', page, size).then(data => {
      dispatch(loadSuccess(GET_HOME_RATED_COURSES, data.data));
      dispatch(hideLoading('homeratedcourses'))
    }).catch(error => {
      // console.log(error);
    });
  };
}

export function homeOffCourses(page, size) {
  return function (dispatch) {
    dispatch(showLoading('homeoffcourses'))
    return httpService.homeClassfCourseSerach('creation_date', page, size).then(data => {
      dispatch(loadSuccess(GET_HOME_OFFERED_COURSES, data.data));
      dispatch(hideLoading('homeoffcourses'))
    }).catch(error => {
      // console.log(error);
    });
  };
}

export function homeNewCourses(page, size) {
  return function (dispatch) {
    dispatch(showLoading('homenewcourses'))
    return httpService.homeClassfCourseSerach('creation_date', page, size).then(data => {
      dispatch(loadSuccess(GET_HOME_NEW_COURSES, data.data));
      dispatch(hideLoading('homenewcourses'))
    }).catch(error => {
      // console.log(error);
    });
  };
}

export function homePopCourses(page, size) {
  return function (dispatch) {
    dispatch(showLoading('homepopcourses'))
    return httpService.homeClassfCourseSerach('popularity', page, size).then(data => {
      dispatch(loadSuccess(GET_HOME_POPULAR_COURSES, data.data));
      dispatch(hideLoading('homepopcourses'))
    }).catch(error => {
      // console.log(error);
    });
  };
}

export function addWishList(course) {
  return function (dispatch) {
    if(store.getState().Authentication.status){ 
    dispatch(showLoading('addWishList'))
    return httpService.addWishList(store.getState().Authentication.user_id,course).then(data => {
      dispatch(loadSuccess(ADD_TO_USER_WISHLIST, data.data));
      dispatch(hideLoading('addWishList'))
      openNotificationWithIcon('success',store.getState().language.code === 'ar'?'تم اضافه الكورس':'Course added to wishlist','')
    }).catch(error => {
      // console.log(error.response);
      openNotificationWithIcon('error','Error','')
      dispatch(resetLoading('addWishList'))
    });
  }else{
    openNotificationWithIcon('error','Error','Please sign in')
  }
  };
}

export function addShopCart(price,course,round) {
  return function (dispatch) {
    if(store.getState().Authentication.status){ 
    dispatch(showLoading('addShopCart'))
    return httpService.addShopCart(store.getState().shop_cart.shop_cart.id,price,course,round).then(data => {
      dispatch(loadSuccess(ADD_TO_USER_SHOPCART, data.data));
      dispatch(hideLoading('addShopCart'))
      openNotificationWithIcon('success','Course added to shop cart','')
    }).catch(error => {
      openNotificationWithIcon('error','Error','')
      dispatch(resetLoading('addShopCart'))
      // console.log(error.response);
    });
  }else{
    openNotificationWithIcon('error',store.getState().language.code === 'ar'?'خطآ':'Error',store.getState().language.code === 'ar'?'برجاء تسجيل الدخول':'Please sign in')
  }
  };
}


export function Register(username,email,password) {
  return function (dispatch) {
    dispatch(showLoading('Register'))
    return httpService.Register(username,email,password).then(data => {
      localStorage.setItem('user_id',data.data.user.id);
      dispatch(createShopCart())
      localStorage.removeItem('user_id');
      dispatch(hideLoading('Register'))
      successModal('Registeration Successful',store.getState().language.code === 'ar'?'من فضلك راجع البريد الالكتروني':'Please check your email')
      // openNotificationWithIcon('success','Registeration Successfull Please Check your email','')
    }).catch(error => {
      dispatch(loadSuccess(REGISTER_FAILED, error.response.data));
      dispatch(hideLoading('Register'))
      // console.log(error.response);
    });
  };
}

export function Login(email,password) {
  return function (dispatch) {
    dispatch(showLoading('Login'))
    return httpService.Login(email,password).then(data => {
      if(store.getState().Authentication.remember_me){ 
      localStorage.setItem('api_token',data.data.token);
      localStorage.setItem('user_id',data.data.user.id);
      }else{
        sessionStorage.setItem('api_token',data.data.token);
        sessionStorage.setItem('user_id',data.data.user.id);
      }
      dispatch(loadSuccess(LOGIN_SUCCESSFULL, data.data));
      dispatch(loadSuccess(GET_PROFILE,data.data.user));
      dispatch(homeWishlist())
      dispatch(hideLoading('Login'))
       dispatch(shopCarts())
       setTimeout(()=>{
        openNotificationWithIcon('success',store.getState().language.code === 'ar'? `${data.data.user.username} , اهلاَ` :`Welcome, ${data.data.user.username}`,'')
       },4000)
    }).catch(error => {
      dispatch(loadSuccess(LOGIN_FAILED,error.response?error.response.data:{error:['Error']}))
      dispatch(hideLoading('Login'))
      // console.log(error.response);
    });
  };
}


export function editProfile(user) {
  return function (dispatch) {
    dispatch(showLoading('editprofile'))
    return httpService.editProfile(store.getState().Authentication.user_id,store.getState().Authentication.token,user).then(data => {
      dispatch(loadSuccess(EDIT_PROFILE, data.data));
      dispatch(hideLoading('editprofile'))
      openNotificationWithIcon('success',store.getState().language.code === 'ar'?'تم تعديل الحساب بنجاح':'Profile updated Successfully','')      
    }).catch(error => {
      // console.log(error.response);
      openNotificationWithIcon('error','Error',error.response.data)
    });
  };
}

export function courseEnroll(course,round) {
  return function (dispatch) {
    dispatch(showLoading('courseEnroll'));
    return httpService.courseEnroll(store.getState().Authentication.user_id,course,round).then(data => {
      dispatch(loadSuccess(COURSE_ENROLL, data.data));
      dispatch(hideLoading('courseEnroll'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function courseEnrollAll(){
  return function (dispatch) {
    if(store.getState().shop_carts.content.length>0){ 
    dispatch(showLoading('courseEnrollall'))
    store.getState().shop_carts.content.forEach(e=>{
      e.items.forEach(e1=>{ 
          dispatch(courseEnroll(e1.course,e1.round))
      })
      dispatch(unactivateShopCart(e.id))
    })
    dispatch(hideLoading('courseEnrollall'))
    dispatch(loadSuccess(ENROLLMENT_SUCCESSFULL,{content:[],size:0,total_price:0}))
    openNotificationWithIcon('success',store.getState().language.code === 'ar'?'تم الالتحاق بنجاح':'You enrolled successfully','')      
    dispatch(createShopCart())
  }else{
    openNotificationWithIcon('error',store.getState().language.code === 'ar'?'برجاء اضافه كورسات لسله المشتريات':'Please add courses to shop cart','')      
  }
}
}

export function doPayment(ref_no,course,round,cart,image) {
  return function (dispatch) {
    dispatch(showLoading('doPayment'))
    return httpService.doPayment(cart,store.getState().Authentication.user_id,course,round,ref_no,image).then(data => {
      dispatch(loadSuccess(DO_PAYMENT, data.data));
      dispatch(hideLoading('doPayment'))
      openNotificationWithIcon('success',store.getState().language.code === 'ar'?'تمت عمليه الدفع بنجاح':'Your payment is successfull','')      
    }).catch(error => {
      openNotificationWithIcon('error',store.getState().language.code === 'ar'?'لم تتم عمليه الدفع':'Your payment  failed','')      
      console.log(error.response);
    });
  };
}

export function createShopCart() {
  return function (dispatch) {
   
    dispatch(showLoading('createshopcart'))
    return httpService.createShopCart(store.getState().Authentication.user_id).then(data => {
      dispatch(loadSuccess(CREATE_SHOPCART, data.data));
      dispatch(hideLoading('createshopcart'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function unactivateShopCart(cart_id) {
  return function (dispatch) {
    dispatch(showLoading('unactivateShopCart'))
    return httpService.unactivateShopCart(cart_id).then(data => {
      dispatch(loadSuccess(UNACTIVATE_SHOPCART, data.data));
      dispatch(hideLoading('unactivateShopCart'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function wishList(page,size) {
  return function (dispatch) {
    dispatch(showLoading('wishList'))
    return httpService.wishList(store.getState().Authentication.user_id,page,size).then(data => {
      dispatch(loadSuccess(GET_USER_WISHLIST, data.data));
      dispatch(hideLoading('wishList'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function share(email,course) {
  return function (dispatch) {
    dispatch(showLoading('share'))
    return httpService.share(email,course).then(data => {
      dispatch(loadSuccess(SHARE, data.data));
      dispatch(hideLoading('share'))
      openNotificationWithIcon('success',store.getState().language.code==='ar'?'تم نشر الكورس':'Course shared ')
    }).catch(error => {
      // console.log(error.response);
    });
  };
}


export function shopCarts() {
  return function (dispatch) {
    dispatch(showLoading('shopcarts'))
    return httpService.shopCarts(store.getState().Authentication.user_id).then(data => {
      dispatch(loadSuccess(GET_USER_SHOPCARTS, data.data));
      dispatch(hideLoading('shopcarts'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function removeWishlist(id) {
  return function (dispatch) {
    dispatch(showLoading('removeWishlist'))
    return httpService.removeWishlist(id).then(data => {
      dispatch(loadSuccess(REMOVE_ITEM_FROM_WISHLIST, id));
      dispatch(hideLoading('removeWishlist'))
      openNotificationWithIcon('success',store.getState().language.code === 'ar'?'تم حذف الكورس':'Course removed from your wishlist','')      
    }).catch(error => {
      // console.log(error.response);

    });
  };
}

export function removeShopItem(id,index) {
  return function (dispatch) {
    dispatch(showLoading('removeWishlist'))
    return httpService.removeShopItem(id).then(data => {
      dispatch(loadSuccess(REMOVE_ITEM_FROM_SHOPCART, {id:id,index:index}));
      dispatch(hideLoading('removeWishlist'))
      openNotificationWithIcon('success',store.getState().language.code === 'ar'?'تم حذف الكورس':'Course removed from your shop cart','')      
    }).catch(error => {
      // console.log(error.response);

    });
  };
}

export function checkEnrollment(page, size) {
  return function (dispatch) {
    dispatch(showLoading('checkEnrollment'))
    return httpService.checkEnrollment('POPULAR', page, size).then(data => {
      dispatch(loadSuccess(CHECK_ENROLLMENT, data.data));
      dispatch(hideLoading('checkEnrollment'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function courseDetails(id) {
  return function (dispatch) {
    dispatch(showLoading('courseDetails'))
    return httpService.courseDetails(id).then(data => {
      dispatch(loadSuccess(GET_COURSE_DETAILS, data.data));
      dispatch(hideLoading('courseDetails'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function getLanguages() {
  return function (dispatch) {
    dispatch(showLoading('getlanguges'))
    return httpService.getLanguages().then(data => {
      dispatch(loadSuccess(GET_LANGUAGES, data.data));
      dispatch(hideLoading('getlanguges'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function courseInstr(id) {
  return function (dispatch) {
    dispatch(showLoading('courseinstructor'))
    return httpService.courseInstr(id).then(data => {
      dispatch(loadSuccess(GET_COURSE_INSTRUCTORS, data.data));
      dispatch(hideLoading('courseinstructor'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function Tags(page, size) {
  return function (dispatch) {
    dispatch(showLoading('Tags'))
    return httpService.Tags('POPULAR', page, size).then(data => {
      dispatch(loadSuccess(GET_TAGS, data.data));
      dispatch(hideLoading('Tags'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function userEnrollments(page, size) {
  return function (dispatch) {
    dispatch(showLoading('userEnrollments'))
    return httpService.userEnrollments(store.getState().Authentication.user_id).then(data => {
      dispatch(loadSuccess(GET_USER_ENROLLMENTS, data.data));
      dispatch(hideLoading('userEnrollments'))
      dispatch(hideLoading())
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function userProfile() {
  return function (dispatch) {
    dispatch(showLoading('userProfile'))
    return httpService.userProfile(store.getState().Authentication.user_id,store.getState().Authentication.token).then(data => {
      dispatch(loadSuccess(GET_PROFILE, data.data));
      dispatch(hideLoading('userProfile'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function searchCourseByTags(page, size) {
  return function (dispatch) {
    dispatch(showLoading('searchCourseByTags'))
    return httpService.searchCourseByTags('POPULAR', page, size).then(data => {
      dispatch(loadSuccess(SEARCH_COURSES_BY_TAG, data.data));
      dispatch(hideLoading('searchCourseByTags'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function coursesByCategory(page, size) {
  return function (dispatch) {
    dispatch(showLoading('coursesByCategory'))
    return httpService.coursesByCategory('POPULAR', page, size).then(data => {
      dispatch(loadSuccess(GET_COURSES_BY_CATEGORY, data.data));
      dispatch(hideLoading('coursesByCategory'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}



export function getCourseRounds(id) {
  return function (dispatch) {
    dispatch(showLoading('getCourseRounds'))
    return httpService.getCourseRounds(id).then(data => {
      dispatch(loadSuccess(GET_COURSE_ROUNDS, data.data));
      dispatch(hideLoading('getCourseRounds'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}


export function homeWishlist() {
  return function (dispatch) {
    dispatch(showLoading('homeWishlist'))
    return httpService.homeWishlist(store.getState().Authentication.user_id).then(data => {
      dispatch(loadSuccess(HOME_WISHLIST, data.data));
      dispatch(hideLoading('homeWishlist'))
    }).catch(error => {
      // console.log(error.response);
    });
  };
}


export function contactUs(name,email,telephone,subject,message){
  return function (dispatch) {
    dispatch(showLoading('contactus'))
    return httpService.contactUs(name,email,telephone,subject,message).then(data => {
      dispatch(loadSuccess(CONTACT_US, data.data));
      dispatch(hideLoading('contactus'))
    openNotificationWithIcon('success',store.getState().language.code === 'ar'?'تمت العمليه بنجاح':'Process sent Successfully','')
    }).catch(error => {
      // console.log(error.response);
    });
  };
}

export function changeLang(lang) {
  return function (dispatch) {
    dispatch(loadSuccess(CHANGE_LANGUAGE,{language:lang}))
  };
}

export function checkAuth() {
  return function (dispatch) {
    var token = localStorage.getItem('api_token') || sessionStorage.getItem('api_token') ;
    var user_id = localStorage.getItem('user_id') || sessionStorage.getItem('user_id');
    var status = !token || token === '' || typeof token === 'undefined' ? false : true;
    dispatch(loadSuccess(CHECK_AUTHENTICATION, { token: token, status: status,user_id:user_id }))
    if(status){    
    if(typeof store.getState().shop_cart.shop_cart.id === 'undefined'){
      dispatch(shopCarts())
      }
      dispatch(homeWishlist())
    }
  }
}

export function Logout() {
  return function (dispatch) {
    localStorage.removeItem('api_token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('shopcart_id')
    sessionStorage.clear()
    dispatch(loadSuccess(CREATE_SHOPCART,{}))
    dispatch(loadSuccess(LOGOUT, {}))
  }
}



export function loadSuccess(type, data) {
  return { type: type, data };
}