import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './webpack_src/Routes';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <Routes />, root);
});