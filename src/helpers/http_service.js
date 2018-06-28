import Axios from "axios";

var api_url = 'http://104.237.129.243:8090';
var image_url = 'http://104.237.129.243:8090/slider/img/';

function menuCat() {
    return Axios.get(`${api_url}/screen/catSubcat`);
}

function search(text, page, size) {
    return Axios.get(`${api_url}/courses?key=text&value=${text}&page=${page}&size=${size}`);
}

function homeSlider() {
    return Axios.get(`${api_url}/screen/slider`);
}

function homeEventNotif() {
    return Axios.get(`${api_url}/screen/event`);
}


function homeCatList() {
    return Axios.get(`${api_url}/screen/cat8Courses`);
}


function homeCatItems(id, page, size) {
    return Axios.get(`${api_url}/courses?key=CAT&value=${id}&page=${page}&size=${size}`);
}

function homeClassfCourseSerach(type, page, size) {
    return Axios.get(`${api_url}/courses?key=SPECIAL&value=${type}&page=${page}&size=${size}`);
}

export const httpService = {
    menuCat
    , search
    , homeSlider
    , homeEventNotif
    , homeCatList
    , homeCatItems
    , homeClassfCourseSerach
};