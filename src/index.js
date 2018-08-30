import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ModalSwitch from './pages/modal_switch/modal_switch';
import { Provider } from 'react-redux';
import { LocalizeProvider } from "react-localize-redux";
import store from './helpers/store';
import { BackTop,LocaleProvider } from 'antd';
import { checkAuth,menuCat } from './actions';
import 'antd/dist/antd.css';
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
import './index.css';
import './css/404.css';
import ar_EG from 'antd/lib/locale-provider/ar_EG';
import en_US from 'antd/lib/locale-provider/en_US';

store.dispatch(menuCat())
store.dispatch(checkAuth())

ReactDOM.render(
<Provider store={store} >
<LocalizeProvider >
<LocaleProvider locale={localStorage.getItem('language')==='ar'?ar_EG:en_US} >
  <Router  >
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


