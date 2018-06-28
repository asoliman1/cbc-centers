import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ModalSwitch from './pages/modal_switch/modal_switch';
import { Provider } from 'react-redux';
import store from './helpers/store';
import './index.css';
import 'antd/dist/antd.css';


ReactDOM.render(
<Provider store={store} >
  <Router>
    <div>
      <Route  component={Header} />
      <div className="main">
        <Route component={ModalSwitch} />
      </div>
      <Route  component={Footer} />
    </div>
  </Router>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
