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

const NoMatch = ({ location }) => (
    <div style={{ textAlign: 'center', padding: '50px' }} >
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            store.getState().Authentication.status ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/login_signup', state: { modal: true } }} />
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
              { name: "English", code: "en" }
            ],
            translation: translations,
            options: { renderToStaticMarkup }
          });
          this.props.setActiveLanguage(localStorage.getItem('language')||'en')
          if(localStorage.getItem('language')==='ar'){
            require('moment/locale/ar-sa')
          }else{
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
    }

    componentDidMount(){
        if(this.props.location.pathname==='/')
        this.props.history.push('/home');
        else if(this.props.location.pathname==='/login_signup')
        this.props.history.push('/home');

    }


    render() {
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        ); // not initial render
        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/home" component={home} />
                    <Route path="/about" component={about} />
                    <Route path="/contact" component={contact} />
                    <Route path="/terms" component={terms_conditions} />
                    <Route path="/search" component={search} />
                    {/* <Route path="/instructor" component={instructor} /> */}
                    <PrivateRoute path="/payment" component={payment} />
                    <Route path="/courses/:id" component={course_main} />
                    <Route path="/course_details/:id" component={course_details} />
                    <PrivateRoute path="/checkout" component={checkout} />
                    <PrivateRoute path="/wish" component={wish} />
                    <PrivateRoute path="/course_enrollment/:id" component={course_enrollment} />
                    <PrivateRoute path="/enrollments" component={enrollments} />
                    <PrivateRoute path="/notifications" component={notifications} />
                    <PrivateRoute path="/profile" component={myprofile} />
                    <Route exact component={NoMatch} />
                </Switch>
                {isModal ? <Route path="/login_signup" component={Login_register} /> : null}
            </div>
        );
    }
}



export default withLocalize( ModalSwitch )