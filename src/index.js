/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
// axios.defaults.baseURL = 'https://iamredapple.com/php/';

axios.defaults.baseURL = 'http://localhost/red/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
