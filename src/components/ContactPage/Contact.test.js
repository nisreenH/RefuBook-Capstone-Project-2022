import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from './Contact';

describe('ContactForm', () => {
  test('renders the input fields', () => {
    render(<ContactPage />);
  });
});
