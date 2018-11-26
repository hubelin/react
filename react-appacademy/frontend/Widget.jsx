import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

const Root = () => {
  return (
    <div>
      <Clock />
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('main');
  ReactDOM.render(<Root />, root);
});
