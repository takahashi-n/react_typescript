import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Com from './component';
import Com2 from './component2';
import App2 from './App2';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Com />
    <Com2 />
    <App2 />    
  </React.StrictMode>,
  document.getElementById('root')
);
