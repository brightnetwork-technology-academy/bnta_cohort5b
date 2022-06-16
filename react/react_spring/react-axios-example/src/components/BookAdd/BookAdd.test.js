import React from 'react';
import ReactDOM from 'react-dom';
import BookAdd from './BookAdd';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookAdd />, div);
  ReactDOM.unmountComponentAtNode(div);
});