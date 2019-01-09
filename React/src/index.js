import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactDefault from './components/react-default/react-default';
require('es6-promise').polyfill();
// eslint-disable-next-line
var axios = require('axios');


ReactDOM.render(<ReactDefault />, document.getElementById('root'));


