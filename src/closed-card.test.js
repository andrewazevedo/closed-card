import React from 'react';
import ReactDOM from 'react-dom';
import ClosedCard from './components/closed-card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClosedCard />, div);
});
