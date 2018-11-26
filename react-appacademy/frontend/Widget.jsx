import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import Tabs from './Tabs';

const Root = () => {
  return (
    <div>
      <Clock />
      <Tabs panes={panes} />
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('main');
  ReactDOM.render(<Root />, root);
});

const panes = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second pane here' },
  { title: 'three', content: 'Third pane here' }
];
