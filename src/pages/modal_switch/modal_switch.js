import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import home from "../Home/home";
import Login_register from "../../modals/login_register/login_register";
import about from "../about/about";
import course_enrollment from "../course_enrollment/course_enrollment";
import enrollments from "../enrollments/enrollments";
import wish from "../wish/wish";
import checkout from "../checkout/checkout";
import course_main from "../course_main/course_main";
import payment from "../payment/payment";
import search from "../search/search";
import terms_conditions from "../terms&conditions/terms_conditions";
import contact from "../contact/contact";
import course_details from "../course_details/course_details";
import notifications from "../notifications/notifications";
import store from '../../helpers/store';
import myprofile from '../myprofile/myprofile';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import translations from "../../translations.json";
import { checkAuth } from '../../actions/index';
import { Offline, Online } from "react-detect-offline";
import Offline_comp from '../../components/offline/offline';

const NoMatch = ({ location }) => (
    <div style={{ textAlign: 'center', padding: '50px' }} >

        <section class="error-container">
            <span>4</span>
            <span><span class="screen-reader-text">0</span></span>
            <span>4</span>
            <p> PAGE NOT FOUND </p>
        </section>
        <div class="link-container">
            <img style={{ height: '10%', width: '10%' }} src="/images/cbclogo.png" />
        </div>
    </div>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            store.getState().Authentication.status ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/login_signup', state: { modal: true, from: props.location } }} />
                )
        }
    />
);

class ModalSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.props.initialize({
            languages: [
                { name: "عربي", code: "ar" },
                { name: "En", code: "en" }
            ],
            translation: translations,
            options: { renderToStaticMarkup }
        });
        this.props.setActiveLanguage(localStorage.getItem('language') || 'en')
        if (localStorage.getItem('language') === 'ar') {
            require('moment/locale/ar-sa')
        } else {
            require('moment/locale/en-au');
        }

    }


    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        const { location } = this.props;
        // set previousLocation if props.location is not modal
        if (
            nextProps.history.action !== "POP" &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location;
        }
        window.scroll(0,0)
    }

    componentDidMount() {
        window.scroll(0,0)
        if (this.props.location.pathname === '/')
            this.props.history.push('/home');
        else if (this.props.location.pathname === '/login_signup')
            this.props.history.push('/home');
   
                // listen for changes to localStorage
      if(window.addEventListener) {
        window.addEventListener("storage", this.sessionStorage_transfer, false);
      } else {
        window.attachEvent("onstorage", this.sessionStorage_transfer);
      };
      
      
      // Ask other tabs for session storage (this is ONLY to trigger event)
      if (!sessionStorage.length) {
        localStorage.setItem('getSessionStorage', 'foobar');
        localStorage.removeItem('getSessionStorage', 'foobar');
      };

    }

     sessionStorage_transfer (event) {
        if(!event) { event = window.event; } // ie suq
        if(!event.newValue) return;          // do nothing if no value to work with
        if (event.key == 'getSessionStorage') {
          // another tab asked for the sessionStorage -> send it
          localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
          // the other tab should now have it, so we're done with it.
          localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
        } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
          // another tab sent data <- get it
          var data = JSON.parse(event.newValue);
          for (var key in data) {
            sessionStorage.setItem(key, data[key]);
          }
          store.dispatch(checkAuth())
        }
      };
      
  

    render() {
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        ); // not initial render
        return (
            <div>
                <Online >

                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/home" component={home} />
                    <Route path="/about" component={about} />
                    <Route path="/contact" component={contact} />
                    <Route path="/terms" component={terms_conditions} />
                    <Route path="/search" component={search} />
                    <Route exact path="/courses/category/:cat/:sub?" component={search} />
                    <Route exact path="/courses" component={search} />
                    {/* <Route path="/instructor" component={instructor} /> */}
                    <PrivateRoute path="/payment" component={payment} />
                    <Route exact path="/courses/:id" component={course_main} />
                    <Route exact path="/course_details/:id" component={course_details} />
                    <PrivateRoute path="/checkout" component={checkout} />
                    <PrivateRoute path="/wish" component={wish} />
                    <PrivateRoute exact path="/course_enrollment/:id" component={course_enrollment} />
                    <PrivateRoute path="/enrollments" component={enrollments} />
                    <PrivateRoute path="/notifications" component={notifications} />
                    <PrivateRoute path="/profile" component={myprofile} />
                    <Route exact component={NoMatch} />
                </Switch>
                {isModal ? <Route path="/login_signup" component={Login_register} /> : null}
                </Online>
                <Offline  >
                    <Offline_comp />
                </Offline>
            </div>
        );
    }
}



export default withLocalize(ModalSwitch)