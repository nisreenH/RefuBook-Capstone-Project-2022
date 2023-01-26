import React from 'react';
import ReactDOM from 'react-dom';
import AboutSection from './AboutSection';
import { BrowserRouter } from 'react-router-dom';

it('AboutSection renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AboutSection />
    </BrowserRouter>,
    div
  );
});
