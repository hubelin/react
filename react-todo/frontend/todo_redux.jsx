import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from '../frontend//components/root';

const store = configureStore();
window.store = store;

const Todos = () => {
  return <h1>Todos App</h1>;
};

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<Root store={store} />, document.getElementById('content'))
);
