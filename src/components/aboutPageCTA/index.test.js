import React from 'react';
import {createRoot} from 'react-dom/client';

import AboutPageCTA from '.';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div)
  root.render(
    <>
    <BrowserRouter>
      <AboutPageCTA />
    </BrowserRouter>
    </>
  );
});
