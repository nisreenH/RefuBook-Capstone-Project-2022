import React from 'react';
import ReactDOM from 'react-dom';
import OurStory from './Index';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OurStory></OurStory>, div);
});
