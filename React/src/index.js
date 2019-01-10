import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ReactDefault from './components/react-default/react-default';
import App from './components/app/app'
require('es6-promise').polyfill();
// eslint-disable-next-line
var axios = require('axios');


ReactDOM.render(<App />, document.getElementById('root'));


