import Axios from "axios";

var api_url = 'http://167.99.244.62:8000/api';
var image_url = 'http://104.237.129.243:8090/slider/img';
var api_url_old = 'http://104.237.129.243:8090/'

function getImage(image) {
    return `${image_url}/${image}`;
}

function menuCat() {
    return Axios.get(`${api_url}/courseall/`);
}

function search(text, page, size) {
    return Axios.get(`${api_url}/course/?name_e__icontains=${text}&page=${page}&page_size=${size}`);
}

function homeSlider() {
    return Axios.get(`${api_url_old}/screen/slider`);
}

function homeEventNotif() {
    return Axios.get(`${api_url_old}/screen/event`);
}


function homeCatList(category) {
    return Axios.get(`${api_url}/course/?coursecategories__category=${category}&page_size=4`);
}


function homeCatItems(id, page, size) {
    return Axios.get(`${api_url_old}/courses?key=CAT&value=${id}&page=${page}&size=${size}`);
}

function homeClassfCourseSerach(type, page, size) {
    return Axios.get(`${api_url}/course/?ordering=-${type}/?page_size=${size}/?page${page}`);
}

function addWishList(user, course) {
    return Axios.post(`${api_url}/coursewishlist/`, { "status": "1", "course": course, "user": user });
}

function addShopCart(shopcart, price, course, round) {
    return Axios.post(`${api_url}/shoporderitem/`, { "active": "1", "add_date": new Date().toJSON().slice(0, 10), "price": price, "course": course, "round": round, "order": shopcart });
}

function Register(username = "", email = "", password = "") {
    return Axios.post(`${api_url}/user/register/`, { "user": { "username": username, "email": email, "password": password } });
}

function Login(email = "", password = "") {
    return Axios.post(`${api_url}/user/obtain_token/`, { "email": email, "password": password });
}

function obtainToken() {
    return Axios.post(`${api_url}/user/obtain_token`);
}

function editProfile(id,obj) {
    return Axios.put(`${api_url}/user/${id}/`,obj,{headers:{'Authorization':'bearer '+localStorage.getItem('api_token')}} );
}

function courseEnroll(user, course , round) {
    return Axios.post(`${api_url}/userenrollment/`, { "user": user, "course": course, "round":round , "status": "190" });
}

function doPayment(enroll_id, user, course,round,ref_no) {
    return Axios.put(`${api_url}/userenrollment/${enroll_id}/`, { "user": user, "course": course, "round": round, "status": "192","payment_reference_no":ref_no });
}

function wishList(user, page, size) {
    return Axios.get(`${api_url}/coursewishlist/?user=${user}&page=${page}&page_size=${size}`);
}

function removeWishlist(wish_id) {
    return Axios.delete(`${api_url}/coursewishlist/${wish_id}/`);
}

function checkEnrollment(id) {
    return Axios.get(`${api_url}/userenrollmentprogress/${id}/`);
}

function courseDetails(id) {
    return Axios.get(`${api_url}/course/${id}/`);
}

function Tags() {
    return Axios.get(`${api_url}/tags/`);
}

function userEnrollments(id) {
    return Axios.get(`${api_url}/userenrollment/?user=${id}`);
}

function searchCourseByTags(id) {
    return Axios.get(`${api_url}/coursetag/?tag=${id}`);
}

function coursesByCategory(id) {
    return Axios.get(`${api_url}/coursecategories/?category=${id}`);
}

function notification_cart_counts() {
    return Axios.get(`${api_url}/`);
}

function userProfile(id) {
    return Axios.get(`${api_url}/user/${id}`,{headers:{'Authorization':'bearer '+localStorage.getItem('api_token')}});
}

function getCourseRounds(id) {
    return Axios.get(`${api_url}/courseround/?course=${id}`);
}

function removeShopItem(id) {
    return Axios.delete(`${api_url}/shoporderitem/${id}/`);
}

function createShopCart(user_id){
    return Axios.post(`${api_url}/shoporder/`,{"user":user_id,"creation_date":new Date().toJSON().slice(0, 10),"status":"118"})
}

function shopCarts(id){
    return Axios.get(`${api_url}/shoporder/?user=${id}&status=118`);

}

function unactivateShopCart(id){
    return Axios.put(`${api_url}/shoporder/${id}/`,{"status":"119"});

}

function courseModules(id){
    return Axios.get(`${api_url}/coursemodule/?course=${id}`);

}

function courseDesc(id){
    return Axios.get(`${api_url}/coursedescription/?course=${id}`);

}

function courseInstr(id){
    return Axios.get(`${api_url}/courseinstructor/?course=${id}`);

}

function getLanguages(){
    return Axios.get(`${api_url}/lookups/?lookup=CRS_LNGG`);
}

function searchByfilters(category,sub_category,language,location,text_a,text_e, page, size,type){
    switch (type){
        case 'popular':
        type= '-popularity'
        break;
        case 'new':
        type = '-creation_date'
        break;
        case 'offered' :
        type = ''
         break;
         case 'rated':
         type = '-total_raters'
         break;
         
        default : type = ""
    }
    return Axios.get(`${api_url}/course/?category__in=${category}&coursecategories__subcategory=${sub_category}&language__in=${language}&name_a__icontains=${text_a}&name_e__icontains=${text_e}&page_size=${size}&page=${page}&location=${location}&ordering=${type}`);
}

export const httpService = {
    getLanguages,
    courseInstr,
    searchByfilters,
    courseDesc,
    courseModules,
    menuCat
    , search
    , homeSlider
    , homeEventNotif
    , homeCatList
    , homeCatItems
    , homeClassfCourseSerach
    , coursesByCategory
    , searchCourseByTags
    , userEnrollments
    , Tags
    , courseDetails
    , checkEnrollment
    , getImage
    , addWishList
    , removeWishlist
    , wishList
    , doPayment
    , Login
    , Register
    , editProfile
    // , obtainToken
    , courseEnroll
    , addShopCart
    , userProfile,
    getCourseRounds,
    removeShopItem,
    createShopCart,
    shopCarts,
    unactivateShopCart
};