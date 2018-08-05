import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ModalSwitch from './pages/modal_switch/modal_switch';
import { Provider } from 'react-redux';
import { LocalizeProvider } from "react-localize-redux";
import store from './helpers/store';
import './index.css';
import 'antd/dist/antd.css';
import { BackTop,LocaleProvider } from 'antd';
import { checkAuth } from './actions';
import './css/animate.css'
import './css/banner.css'
import './css/bootstrap.css'
import './css/checkout.css'
import './css/client.css'
import './css/courses.css'
import './css/style.css'
import './css/single.css'
import './css/index.css'
import './css/shop.css'
import './css/font-awesome.css'
import './css/jquery-ui1.css'
import './css/index.css'
import ar_EG from 'antd/lib/locale-provider/ar_EG';
import en_US from 'antd/lib/locale-provider/en_US'
import moment from 'moment';


store.dispatch(checkAuth())


ReactDOM.render(
<Provider store={store} >
<LocalizeProvider >
<LocaleProvider locale={localStorage.getItem('language')==='ar'?ar_EG:en_US} >
  <Router>
    <div>
      <Route  component={Header} />
      <div className="main">
      <BackTop />
        <Route component={ModalSwitch} />
      </div>
      <Route  component={Footer} />
    </div>
  </Router>
  </LocaleProvider>
  </LocalizeProvider>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
